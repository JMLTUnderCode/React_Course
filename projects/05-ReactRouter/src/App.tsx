import React from "react";
import { EVENTS } from "./consts";

function Navigate(href : string | URL | null) {
  window.history.pushState({}, '', href);
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={() => Navigate('/about')}>Go to About Page</button>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/45317638?v=4" alt="Perfil of Junior Lara" />
      </div>
      <p>Welcome to the About Page!</p>
      <button onClick={() => Navigate('/')}>Go to Home Page</button>
    </div>
  )
}

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
  
  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }
  });

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App