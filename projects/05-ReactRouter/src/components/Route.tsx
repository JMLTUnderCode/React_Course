import type { RouteProps } from "../types";
export function Route({ path, Component } : RouteProps) {
  if (path && Component) return null;
};