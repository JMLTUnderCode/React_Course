import React from 'react';
import { SearchMovies } from '../services/movies';

interface MovieProps {
  id: string;
  title: string;
  year: string;
  poster: string;
}

export function useMovies ({ search, sort } : {search : string, sort : boolean}) {
  const [ movies, setMovies ] = React.useState<MovieProps[]>([]);
  const [ loading, setLoading ] = React.useState<boolean>(false);
  
  const previousSearch = React.useRef(search)

  const getMovies = React.useMemo(() => {
    return async ({ search } : {search : string}) => {
      if (search === previousSearch.current) return

      try {
        setLoading(true);
        previousSearch.current = search;
        const result = await SearchMovies({ search });
        setMovies(result);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
  }, []);
/*
  Esto se ejecuta por cada render de la app, esto es cada vez que hay un 
  cambio en el input
  const sortedMovies = sort 
    ? [... movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies;
*/
  const sortedMovies = React.useMemo(() => {
    console.log("Sorting movies");
    return sort 
      ? [... movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, loading, getMovies };
}