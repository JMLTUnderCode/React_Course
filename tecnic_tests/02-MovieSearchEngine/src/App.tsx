import React from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it';

import './App.css';

function useSearch() {
  const [ search, updateSearch ] = React.useState('');
  const [ error, setError ] = React.useState('');
  const isFirstInput = React.useRef(true);

  React.useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '' && !isFirstInput.current) {
      setError('Please enter a movie name');
      return;
    }

    setError('');
  }, [search]);

  return { search, updateSearch, error };
}

export function App() {
  const [ sort, setSort ] = React.useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({search, sort});

  const debounceGetMovies = React.useCallback(
    debounce((search : string) => {
      getMovies({ search });
    }, 300)
    , [getMovies]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies({ search });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debounceGetMovies(newSearch);
  }

  const handleSort = () => {
    setSort(!sort);
  }

  return (
    <div className="project-movie-search-engine">
      <div className="project-movie-search-engine-info">
        <h1>Movie Search Engine</h1>
        <p>Welcome to the Movie Search Engine app!</p>
      </div>
      
      <form className="search-engine" onSubmit={handleSubmit}>
        <input 
          className='search-box'
          type="text" 
          value={search} 
          name="movieName" 
          onChange={handleChange}
          placeholder='Avengers, Matrix, Batman, ...' 
        />
        <button className="button-search" type='submit' >Search</button>
        <div className="checkbox">
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <p>Sort</p>
        </div>
      </form>
      
      {error !== '' && <p style={{ color: 'red' }}>{error}</p>}

      <div className="results">
        {
          loading 
            ? <h2 className="loading">Loading...</h2> 
            : <Movies movies={movies} />
        }
      </div>
    </div>
  );
};