import React from "react";
import { EVENTS } from "../consts";
import type { RouterProps, RouteProps } from "../types";
import { match } from 'path-to-regexp';
import { getCurrentPath } from "../utils";

export function Router({ children, routes, defaultComponent } : RouterProps) {
  const [currentPath, setCurrentPath] = React.useState(getCurrentPath());

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }
  }, []);

  let routeParams: Partial<Record<string, string | string[]>> = {};

  // Add routes from children <Route /> components
  const routesFromChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;
    const { props, type } = child as React.ReactElement<RouteProps>;
    const isRoute = (type as { name: string }).name === 'Route';

    return isRoute ? props : null;
  });

  const routesToUse = Array.isArray(routesFromChildren) 
    ? routes.concat(routesFromChildren).filter(Boolean) 
    : routes;

  const Page = routesToUse.find(({ path }) => {
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