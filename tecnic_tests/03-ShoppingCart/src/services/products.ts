import type { ProductProps, JsonProductProps } from '../types';
import { API_URL } from '../constants';

function mappedProducts(products: JsonProductProps[]): ProductProps[] {
  return products.map(product => ({
    id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    img: product.thumbnail
  }));
};

export async function getProducts(): Promise<ProductProps[]> {
  const response = await fetch(API_URL);
  const data = await response.json();
  return mappedProducts(data.products);
}