import React from "react";
import { EVENTS } from "./consts";
import type { RouterProps } from "./types";

export function Router({ routes, defaultComponent } : RouterProps) {
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
  }, []);

  const Page = routes.find(({ path }) => path === currentPath)?.Component;

  return Page ? <Page /> : React.createElement(defaultComponent);
};