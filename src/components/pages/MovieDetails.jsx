import { getMovie } from 'components/APP/App';
import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

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
  const buttonBackDetails = () => {
    navigate(location.state ?? '/');
  };

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      <button onClick={buttonBackDetails}>Go Back</button>
      {error && <p>Error</p>}
      {movie && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
            <div>
              <h2>{movie.title}</h2>
              <p>User score - {movie.vote_average.toFixed(1)}/10</p>
              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h4>Genres</h4>
                <p>{movie.genres.map(el => el.name + ' ')}</p>
              </div>
            </div>
          </div>
          <div>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </div>
        </div>
      )}

      <Outlet />
    </section>
  );
};
export default MovieDetails;
