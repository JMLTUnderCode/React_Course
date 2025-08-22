import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { SearchPage } from "./pages/Search";
import { Page404 } from "./pages/Page404";
import { Router } from "./components/Router";
import { Route } from "./components/Route";
import type { RouteProps } from "./types";

const appRoutes: RouteProps[] = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404} >
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App