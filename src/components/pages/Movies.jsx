import { getSearchMovie } from 'components/APP/App';
import { SearchBar } from 'components/component/SearchBar ';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import {
  ItemMovies,
  ItemPhotoMovies,
  ListItemMovies,
  ListItemP,
  MovesListDivItem,
} from './MoviesStyled';
import PhotoError from './photo/ukrkino.jpg';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [seatchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    async function getSearch() {
      try {
        setIsloading(true);
        const movi = seatchParams.get('search');
        const { results } = await getSearchMovie(movi);
        setMovies(results);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsloading(false);
      }
    }
    getSearch();
  }, [seatchParams]);

  return (
    <section>
      <SearchBar />
      {isloading && <div></div>}
      <ListItemMovies>
        {movies &&
          movies.map(e => {
            return (
              <ItemMovies key={e.id}>
                <MovesListDivItem>
                  <Link to={`/movies/${e.id}`} state={location}>
                    <ItemPhotoMovies
                      src={
                        e.poster_path
                          ? `https://image.tmdb.org/t/p/original/${e.poster_path}`
                          : PhotoError
                      }
                      alt="Logo"
                    />
                    <ListItemP>{e.original_title}</ListItemP>
                  </Link>
                </MovesListDivItem>
              </ItemMovies>
            );
          })}
      </ListItemMovies>
    </section>
  );
};
export default Movies;
