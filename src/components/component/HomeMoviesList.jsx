import { getMoviesToday } from 'components/APP/App';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeList,
  HomeListDivItem,
  HomeListImgItem,
  HomeListItem,
  HomeListItemdiv,
  HomeListPItem,
  HomeListSpan,
} from './HomeMoviesListStyled';

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
      {isLoading && <h1>Завантаження</h1>}

      <HomeList>
        {movies.map(movie => (
          <HomeListItem key={movie.id}>
            <Link to={`movies/` + movie.id.toString()}>
              <HomeListItemdiv>
                <HomeListSpan>
                  <HomeListDivItem>
                    <HomeListImgItem
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      width={200}
                    />
                    <HomeListPItem>{movie.title || movie.name}</HomeListPItem>
                  </HomeListDivItem>
                </HomeListSpan>
              </HomeListItemdiv>
            </Link>
          </HomeListItem>
        ))}
      </HomeList>
    </>
  );
};
