import { getCast } from 'components/APP/App';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieCast() {
      setIsLoading(true);
      const { cast } = await getCast(movieId);
      setCast(cast);
      setIsLoading(false);
    }
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <p>Завантаження</p>}
      <ul>
        {cast &&
          cast.map(e => {
            return (
              <li key={e.id}>
                <img
                  width="150"
                  src={
                    e.profile_path
                      ? `https://image.tmdb.org/t/p/original/${e.profile_path}`
                      : '/'
                  }
                  alt={e.name}
                />

                <p>{e.name}</p>
                <p>{e.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
