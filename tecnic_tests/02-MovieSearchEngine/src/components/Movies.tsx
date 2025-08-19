interface MovieProps {
  id: string;
  title: string;
  year: string;
  poster: string;
}

function ListOfMovies({ movies }: { movies: MovieProps[] }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </div>
      ))}
    </ul>
  );
};

function NoMoviesResults() {
  return (
    <h2 className="no-results">No results found</h2>
  )
}

export function Movies ({movies} : {movies: MovieProps[]}) {
  const hasMovies = movies?.length > 0;
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}