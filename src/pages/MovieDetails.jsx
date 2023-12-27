import { getMovie } from 'components/APP/App';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  DivContentMovie,
  MovieContentCategori,
  MovieContentCategoriI,
  MovieContentCategoriSpan,
  MovieContentCategoriUl,
  MovieContentDiv,
  MovieContentDivWraper,
  MovieContentDivWraperText,
  MovieDetailsBtnGoBeack,
  MovieDetailsBtnGoBeackDiv,
  MovieDetailsBtnGoBeackspan1,
  MovieDetailsBtnGoBeackspan2,
  NavListCast,
  NavListDiv,
  NavListReduce,
} from './MovieDetailsStyled';
import Errorstory from 'components/Error/Errorstory';
import { Loading } from 'components/Cast/CastStyles';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [error, setIsError] = useState(false);

  useEffect(() => {
    async function getMovieDetail() {
      try {
        setIsLoading(true);
        const result = await getMovie(movieId);
        setMovie(result);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetail();
  }, [movieId]);
  // const buttonBackDetails = () => {
  //   navigate(location.state?.from || '/');
  // };

  return (
    <section>
      {isLoading && <Loading />}
      <MovieDetailsBtnGoBeackDiv>
        <MovieDetailsBtnGoBeack
          onClick={() => navigate(location.state ?? '/movies')}
        >
          Go Back
        </MovieDetailsBtnGoBeack>
        <MovieDetailsBtnGoBeackspan1></MovieDetailsBtnGoBeackspan1>
        <MovieDetailsBtnGoBeackspan2></MovieDetailsBtnGoBeackspan2>
      </MovieDetailsBtnGoBeackDiv>

      {error && <Errorstory />}
      {movie && (
        <DivContentMovie>
          <MovieContentDiv>
            <MovieContentDivWraper>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                width={300}
              />
              <MovieContentDivWraperText>
                <h2>{movie.title}</h2>
                <p>User score - {movie.vote_average.toFixed(1)}/10</p>
                <div>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                </div>
                <div>
                  <h3>Genres</h3>

                  <MovieContentCategoriUl>
                    {movie.genres.map(el => (
                      <MovieContentCategori key={el.id}>
                        <MovieContentCategoriSpan>
                          {el.name + ' '}
                        </MovieContentCategoriSpan>
                        <MovieContentCategoriI></MovieContentCategoriI>
                      </MovieContentCategori>
                    ))}
                  </MovieContentCategoriUl>
                </div>
                <NavListDiv>
                  <NavListCast to="cast" state={location.state}>
                    Cast
                  </NavListCast>
                  <NavListReduce to="reviews" state={location.state}>
                    Reviews
                  </NavListReduce>
                </NavListDiv>
              </MovieContentDivWraperText>
            </MovieContentDivWraper>
          </MovieContentDiv>
        </DivContentMovie>
      )}
      <Outlet />
    </section>
  );
};
export default MovieDetails;
