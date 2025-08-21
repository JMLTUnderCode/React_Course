import { Link } from "../Link";

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  )
};