import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<header>
				<h1>Hello, World!</h1>
				<p>This is a simple React application.</p>
			</header>
		</StrictMode>,
	);
} else {
  throw new Error("Root element with id 'root' not found.");
}