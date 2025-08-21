import type { CartProps, CartItemProps, ProductProps } from '../types';
import { ACTIONS } from '../constants';

export const updateLocalStorage = (cart: CartProps) => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
};

type CartAction =
  | { type: typeof ACTIONS.ADD_TO_CART; payload: ProductProps }
  | { type: typeof ACTIONS.REMOVE_FROM_CART; payload: CartItemProps }
  | { type: typeof ACTIONS.CLEAR_CART; payload: CartProps }
  | { type: typeof ACTIONS.UPDATE_CART_ITEM_QUANTITY; payload: { item: CartItemProps; quantity: number } };

export function cartReducer(cartState: CartProps, action: CartAction): CartProps {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_TO_CART: {
      const newProduct: CartItemProps = { 
        product: payload, 
        quantity: 1, 
        totalPrice: payload.price
      };
      const newState = {
        items: [...cartState.items, newProduct],
        totalAmount: Number((cartState.totalAmount + newProduct.totalPrice).toFixed(2))
      };
      updateLocalStorage(newState);
      return newState;
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const itemToRemove = cartState.items.find(item => item.product.id === payload.product.id);
      if (!itemToRemove) return cartState;
      const newState = {
        items: cartState.items.filter(item => item.product.id !== payload.product.id),
        totalAmount: Number((cartState.totalAmount - itemToRemove.totalPrice).toFixed(2))
      };
      updateLocalStorage(newState);
      return newState;
    }
    case ACTIONS.CLEAR_CART: {
      updateLocalStorage(payload);
      return payload;
    }
    case ACTIONS.UPDATE_CART_ITEM_QUANTITY: {
      const itemIndex = cartState.items.findIndex(item => item.product.id === payload.item.product.id);
      if (itemIndex === -1) return cartState;

      const updatedItem = {
        ...cartState.items[itemIndex],
        quantity: payload.quantity,
        totalPrice: Number((payload.quantity * cartState.items[itemIndex].product.price).toFixed(2))
      };

      const updatedItems = [...cartState.items];
      updatedItems[itemIndex] = updatedItem;

      const newState = {
        items: updatedItems,
        totalAmount: Number(updatedItems.reduce((total, item) => total + item.totalPrice, 0).toFixed(2))
      };
      updateLocalStorage(newState);
      return newState;
    }
    default:
      return cartState;
  }
}