# Crea un React Router desde cero

- [x] Instalar el linter
- [x] Crear una forma de hacer MPAs (Multiple Page Application)
- [x] Crea una forma de hacer SPAs (Single Page Applications)
- [x] Poder navegar entre páginas con el botón de atrás
- [x] Crear componente Link para hacerlo declarativo
- [x] Crear componente Router para hacerlo más declarativo
- [x] Soportar ruta por defecto (404)
- [x] Soportar rutas con parámetros (Usar `npm install path-to-regexp -E` )
- [x] Componente <Route /> para hacerlo declarativo
- [x] Lazy Loading de las rutas
- [x] Hacer un i18n con las rutas
- [x] Testing 
  - [x] Instala: `npm install vitest -D`
  - [x] Instala: `npm install happy-dom @testing-library/react -D`
  - [x] Edita la configuracion de vite agregando: 
    ```
    ...
    test: {
      envirotment: 'happy-dom'
    }
    ```
  - [x] Crea carpeta test, crea tus test con extesion `.test.tsx`
  - [x] Agrega al package.json en la seccion de scripts:
    ```
    "scripts": {
      ...
      "test": "vitest"
    },
    ```
  - [x] Ejecuta los test: `npm run test`
  - [x] Opcional: instalar extension vitest en VSCode.
  - [x] Para usar Vitest UI:
    - [x] Agrega al package.json en la seccion de scripts:
      ```
      "scripts": {
        ...
        "test:ui": "vitest --ui"
      },
      ```
    - [x] Ejecutar: `npm run test:ui`
    - [x] Responde con `y` a la instalacion de la dependencia.
- [ ] Publicar el paquete en NPM