import React from "react";
import { EVENTS } from "../consts";
import type { RouterProps } from "../types";
import { match } from 'path-to-regexp';

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

  let routeParams: Partial<Record<string, string | string[]>> = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    // Using path-to-regexp for detecting dinamic path
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false;

    routeParams = matched.params;
    return true;
  })?.Component;

  return Page 
    ? <Page routeParams={routeParams} /> 
    : React.createElement(defaultComponent);
};