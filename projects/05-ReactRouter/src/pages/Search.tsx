import { Link } from "../components/Link"

export function SearchPage({ routeParams } : { routeParams? : Partial<Record<string, string | string[]>> }) {
  return (
    <div className="searchpage">
      <h1>Search Page</h1>
      <p>Welcome to the Search Page!</p>
      <p style={{ color: 'rgba(59, 242, 59, 0.864)' }}>Search Query: {routeParams?.query}</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  )
};