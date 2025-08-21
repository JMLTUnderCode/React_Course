import React from "react";
import { FiltersContext } from '../contexts/FiltersContext';
import { type ProductProps } from '../types';

export function useFilters() {
  const context = React.useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider.');
  }
  const { filters, setFilters } = context;

  const filterProducts = (products: ProductProps[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
          (
            filters.category === 'all' || 
            product.category === filters.category
          )
      );
    });
  };

  return { filters, filterProducts, setFilters };
}