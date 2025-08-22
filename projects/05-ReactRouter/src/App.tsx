import React from "react";
import { Router } from "./components/Router";
import { Route } from "./components/Route";
import type { RouteProps } from "./types";

const HomePage = React.lazy(() => {
  return import("./pages/Home")
    .then(module => ({ default: module.HomePage }));
});
const AboutPage = React.lazy(() => {
  return import("./pages/About")
    .then(module => ({ default: module.AboutPage }));
});
const SearchPage = React.lazy(() => {
  return import("./pages/Search")
    .then(module => ({ default: module.SearchPage }));
});
const Page404 = React.lazy(() => {
  return import("./pages/Page404")
    .then(module => ({ default: module.Page404 }));
});

const appRoutes: RouteProps[] = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
];

function App() {
  return (
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404} >
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </React.Suspense>
    </main>
  )
}

export default App