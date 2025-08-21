import React from 'react';
import { ACTIONS, INITIAL_CART_STATE } from '../constants';
import type { CartItemProps, ProductProps } from '../types';
import { cartReducer } from '../reducers/cartReducer';

export function useCartReducer() {
  
  const [cartState, dispatch] = React.useReducer(cartReducer, INITIAL_CART_STATE);

  const addToCart = (product: ProductProps) => dispatch({ 
    type: ACTIONS.ADD_TO_CART, 
    payload: product
  });

  const removeFromCart = (item : CartItemProps) => dispatch({
    type: ACTIONS.REMOVE_FROM_CART,
    payload: item
  });

  const clearCart = () => dispatch({
    type: ACTIONS.CLEAR_CART,
    payload: INITIAL_CART_STATE
  });

  const updateCartItemQuantity = (item: CartItemProps, quantity: number) => dispatch({
    type: ACTIONS.UPDATE_CART_ITEM_QUANTITY,
    payload: { item, quantity }
  });

  return { cartState, addToCart, updateCartItemQuantity, removeFromCart, clearCart };
}