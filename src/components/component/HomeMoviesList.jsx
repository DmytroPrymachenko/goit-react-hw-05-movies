import { getMoviesToday } from 'components/APP/App';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const HomeMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const { results } = await getMoviesToday();
        setMovies(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <>
      <h1>Привіт</h1>
      {isLoading && <h1>Завантаження</h1>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/` + movie.id.toString()}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
