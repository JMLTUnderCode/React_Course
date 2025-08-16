# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Creacion de punto de entrada

- Crea proyecto: `npm create vite@latest`
- Selecciona Vanilla
- Selecciona JS o TS.
- Instala plugin: `npm install @vitejs/plugin-react -E`
- Instalar dependencias: `npm install react react-dom -E`
- Crear archivo vite.config.ts (o .js en su defecto) en la raiz del proyecto.
  ```typescript
  /* vite.config.ts */
  import { defineConfig } from "vite";
  import React from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [React()]
  });
  ```
  - Al archivo tsconfig.json (o jsconfig.json) debes incluir la siguiente propiedad 
  ```json
  /* tsconfig.json */
  "compilerOptions": {
    /*other options*/
    "jsx": "react-jsx"
  },
  ```
- Teniendo en cuenta `index.html` y el archivo `main.ts` (o .js) se debe justificar que en el HTML se carga el script principal `main` el cual contiene la creacion del punto de entrada en el ID "app". 
- Es vital que los archivos con extension ts o js ahora sean tsx o jsx respectivamente, dado que esta permite la sintaxis XML para agregar declaracion de codigo HTML. El archivo queda
  ```typescript
  /* main.tsx */
  import React from 'react';
  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';

  import { App } from './App';

  const rootElement = document.getElementById('app');
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    throw new Error("App element with id 'app' not found.");
  }
  ```
- Ya teniendo esta base se puede crear la aplicacion en `App.tsx` (o jsx).
  ```typescript
  /* App.tsx */
  import React from 'react';

  export function App() {
    return (
    <div>
      <h1>hello world</h1>
    </div>
    );
  };
  ```
- El siguiente paso es instalar Linter. Se instala
  - eslint
  - @eslint/js
  - typescript
  - typescript-eslint
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - eslint-plugin-jsx-ally
  - eslint-config-prettier
  - prettier
    ```command
    npm install --save-dev eslint @eslint/js typescript typescript-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier prettier
    ```
- Se crea el archivo de configuracion `eslint.config.js` (debe ser .js sin importar si se usa ts o js) en la raiz del proyecto.
  ```typescript
  /* eslint.config.js */
  import js from '@eslint/js'
  import tseslint from 'typescript-eslint'
  import react from 'eslint-plugin-react'
  import reactHooks from 'eslint-plugin-react-hooks'
  import jsxA11y from 'eslint-plugin-jsx-a11y'
  import prettier from 'eslint-config-prettier'

  export default tseslint.config(
    js.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: {
        react,
        'react-hooks': reactHooks,
      },
      extends: [
        react.configs.flat.recommended,
        jsxA11y.flatConfigs.recommended,
        prettier,
      ],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
      settings: {
        react: { version: 'detect' },
      },
    }
  )
  ```

## Creacion de pruebas con Playwright
- Ejecuta en la base de tu proyecto: npm init playwright@latest
- Responde a todas las preguntas con `yes` (recomendable)
- Ir a la carpeta `test` (o el nombre que hayas elegido al momento de inicializar playwright) y escribir los test. Para este proyecto se tiene el siguiente
  ```typescript
  import { test, expect } from '@playwright/test';

  const LOCALHOST_URL = 'http://localhost:5173/';
  const FACT_IMAGE_URL = 'https://cataas.com/cat/says/';

  test('debe mostrar el titulo', async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    // Espera a que aparezca el h2 "Fact Text"
    const h2 = await page.getByRole('heading', { name: 'Fact Text' });
    await expect(h2).toBeVisible();
  });

  test('debe mostrar el span con el texto del hecho', async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    // Verifica que hay un span con texto de longitud > 0
    const span = await page.locator('.fact-info span');
    await expect(span).toBeVisible();
    const spanText = await span.textContent();
    expect(spanText && spanText.length).toBeGreaterThan(0);
  });

  test('debe mostrar la imagen con el src correcto', async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    // Verifica que la imagen existe y el src es correcto
    const img = await page.locator('img');
    await expect(img).toBeVisible();
    const src = await img.getAttribute('src');
    expect(src?.startsWith(FACT_IMAGE_URL)).toBeTruthy();
  });
  ```
- Para ejecutar las pruebas: `npx playwright test`