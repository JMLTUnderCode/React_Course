import React from "react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";
import { CartIcon, ClearCartIcon,  } from "./Icons"; 
import './Cart.css';

export function Cart() {
	const cartCheckBoxID = React.useId();
	const { 
    cartItems, 
    updateCartItemQuantity, 
    removeFromCart, 
    clearCart 
  } = useCart();

	return (
    <>
      <label htmlFor={cartCheckBoxID} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxID} className="cart-check" hidden />

      <aside className="cart">
        <div>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
          <span>${cartItems.totalAmount}</span>
        </div>
        <ul>
          {cartItems.items.map(item => (
            <CartItem 
              key={item.product.id} 
              item={item} 
              updateCartItemQuantity={updateCartItemQuantity} 
              removeFromCart={removeFromCart} 
            />
          ))}
        </ul>
      </aside>
    </>
	)
}