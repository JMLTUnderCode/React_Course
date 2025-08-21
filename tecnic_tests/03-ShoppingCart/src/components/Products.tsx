import './Products.css';
import type { ProductProps, CartItemProps } from '../types';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export function Products ({ products } : { products: ProductProps[] }) {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product : ProductProps) => {
    return cartItems.items.some(item => item.product.id === product.id);
  }

  const handleRemoveFromCart = (product: ProductProps, removeFromCart: (item: CartItemProps) => void) => {
    const itemToRemove = cartItems.items.find(item => item.product.id === product.id);
    if (itemToRemove) removeFromCart(itemToRemove);
  }

	return (
		<div className="products-list">
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.img} alt={product.title} />
              <div>
                <h3>{product.title} - ${product.price}</h3>
              </div>
              <div>
                <button 
                  className={isProductInCart ? 'remove-from-cart' : ''}
                  onClick={() => 
                    isProductInCart 
                      ? handleRemoveFromCart(product, removeFromCart) 
                      : addToCart(product)}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
	)
}