import React from "react";
import { Link } from "../components/Link";

export function HomePage() {
  const [isFirstSearch, setIsFirstSearch] = React.useState(true);
  const [query, setQuery] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (isFirstSearch) {
      setIsFirstSearch(false);
    }
  };

  React.useEffect(() => {
    if (isFirstSearch) return;
    if (query === '') setError("Search query cannot be empty");
    else setError(null);
  }, [query, isFirstSearch]);

  return (
    <div className="homepage">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <div>
        <Link to="/about">Go to About Page</Link>
      </div>
      <div>
        <input 
          type="text" 
          value={query} 
          onChange={handleSearch} 
          placeholder="Enter search query"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Link to={`/search/${query}`}>Go to Search Page</Link>
      </div>
    </div>
  )
};