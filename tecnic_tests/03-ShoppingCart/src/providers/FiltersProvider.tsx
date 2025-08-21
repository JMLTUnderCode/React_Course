import React from "react";
import type { FiltersProps } from "../types";
import { FiltersContext } from "../contexts/FiltersContext";

// Create the provider for filters in the app
export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = React.useState<FiltersProps>({
    category: 'all',
    minPrice: 0
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};