import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { SearchPage } from "./pages/Search";
import { Page404 } from "./pages/Page404";
import { Router } from "./components/Router";
import type { RouteProps } from "./types";

const appRoutes: RouteProps[] = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
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
      <Router routes={appRoutes} defaultComponent={Page404} />
    </main>
  )
}

export default App