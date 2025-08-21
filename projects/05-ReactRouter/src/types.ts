export interface RouteProps {
  path: string;
  Component: React.ComponentType;
};

export interface RouterProps {
  routes: RouteProps[];
  defaultComponent: React.ComponentType;
};

