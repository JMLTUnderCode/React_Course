export const API_URL = 'https://dummyjson.com/products';

export const INITIAL_CART_STATE = JSON.parse(window.localStorage.getItem('cart') 
  || JSON.stringify({ items: [], totalAmount: 0 }));

export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  UPDATE_CART_ITEM_QUANTITY: 'UPDATE_CART_ITEM_QUANTITY'
} as const;