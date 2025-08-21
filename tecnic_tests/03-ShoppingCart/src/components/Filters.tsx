import React from 'react';
import { useFilters } from '../hooks/useFilters';
import './Filters.css';

export function Filters() {
  const minPrice = 0;
  const maxPrice = 3000;
  const { filters, setFilters } = useFilters();
  const minPriceFilterID = React.useId();
  const categoryFilterID = React.useId();

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: Number(event.target.value)
    }));
  };

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      category: event.target.value
    }));
  }

	return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterID}>Price</label>
        <input 
          id={minPriceFilterID}
          type="range" 
          min={minPrice} 
          max={maxPrice} 
          value={filters.minPrice} 
          onChange={handleChangePrice} 
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterID}>Category</label>
        <select id={categoryFilterID} name="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>

        </select>
      </div>
    </section>
  )
}