import { getCast } from 'components/APP/App';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import photokino from './ukrkino.jpg';
import { CastLi, CastUl } from './CastStyles';

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
      <CastUl>
        {cast &&
          cast.map(e => {
            return (
              <CastLi key={e.id}>
                <img
                  width="150"
                  src={
                    e.profile_path
                      ? `https://image.tmdb.org/t/p/original/${e.profile_path}`
                      : photokino
                  }
                  alt={e.name}
                />

                <p>{e.name}</p>

                <p>{e.character}</p>
              </CastLi>
            );
          })}
      </CastUl>
    </div>
  );
};

export default Cast;
