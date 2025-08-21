import React from 'react';
import { getProducts } from '../services/products';
import { type ProductProps } from '../types';

export function useProducts() {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  React.useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);
  return { products };
}