import type { CartItemProps } from '../types';
import { RemoveFromCartIcon } from "./Icons";

export function CartItem({ item, updateCartItemQuantity, removeFromCart }: { item: CartItemProps; updateCartItemQuantity: (item: CartItemProps, quantity: number) => void; removeFromCart: (item: CartItemProps) => void; }) {
  const handleDecreaseQuantity = (item : CartItemProps) => {
	if (item.quantity < 2)  return;
	  updateCartItemQuantity(item, item.quantity - 1);
  };

  const handleIncreaseQuantity = (item : CartItemProps) => {
	  updateCartItemQuantity(item, item.quantity + 1);
  };

  return (
  	<li key={item.product.id}>
  	  <img src={item.product.img} alt={item.product.title} />
  	  <div>
  		  <strong>{item.product.title}</strong> - ${item.product.price}
  	  </div>
  	  <footer>
  		  <button onClick={() => handleDecreaseQuantity(item)}>{'<'}</button>
  		  <small>Quantity: {item.quantity}</small>
  		  <button onClick={() => handleIncreaseQuantity(item)}>{'>'}</button>
  		  <button onClick={() => removeFromCart(item)}>
  		    <RemoveFromCartIcon />
  		  </button>
  	  </footer>
  	</li>
  );
};