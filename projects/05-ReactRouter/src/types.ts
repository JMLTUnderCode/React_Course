export interface RouteProps {
  path: string;
  Component: React.ComponentType<{ routeParams?: Partial<Record<string, string | string[]>> }>;
};

export interface RouterProps {
  routes: RouteProps[];
  defaultComponent: React.ComponentType;
};

export interface LinkProps {
	target?: string;
	to: string;
  children: React.ReactNode;
}