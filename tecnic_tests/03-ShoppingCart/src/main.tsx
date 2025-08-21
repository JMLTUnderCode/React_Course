import React from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './providers/FiltersProvider.tsx'

import App from './App'

import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element with id 'root' not found.");
}