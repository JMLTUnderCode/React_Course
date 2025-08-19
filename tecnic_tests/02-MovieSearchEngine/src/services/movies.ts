const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

interface MovieProps {
  id: string;
  title: string;
  year: string;
  poster: string;
}

interface OMDBMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface OMDBResponse {
  Search: OMDBMovie[];
  totalResults: string;
  Response: string;
}

function mappedMovies(responseMovies: OMDBMovie[]): MovieProps[] {
  return responseMovies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }));
}

interface SearchMoviesParams {
  search: string;
}

export const SearchMovies = async ({search}: SearchMoviesParams): Promise<MovieProps[]> => {
  return fetch(`${BASE_URL}&s=${search}`)
    .then((res) => res.json())
    .then((data: OMDBResponse) => {
      if (data.Response === 'True') {
        return mappedMovies(data.Search);
      }
      return [];
    });
}