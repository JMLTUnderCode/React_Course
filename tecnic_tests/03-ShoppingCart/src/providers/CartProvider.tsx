import React from 'react';
import { CartContext } from "../contexts/CartContext";
import { useCartReducer } from '../hooks/useCartReducer';

export function CartProvider({ children } : { children: React.ReactNode }) {
  const { 
    cartState, 
    addToCart, 
    updateCartItemQuantity, 
    removeFromCart, 
    clearCart 
  } = useCartReducer();

  return (
  	<CartContext.Provider value={{ cartItems: cartState, addToCart, updateCartItemQuantity, removeFromCart, clearCart }}>
  	  {children}
  	</CartContext.Provider>
  );
}