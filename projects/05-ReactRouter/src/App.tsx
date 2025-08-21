import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { Router } from "./Router";
import type { RouteProps } from "./types";

const appRoutes: RouteProps[] = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={() => <h1>404</h1>} />
    </main>
  )
}

export default App