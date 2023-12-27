import { getCast } from 'components/APP/App';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import photokino from '../img/ukrkino.jpg';
import {
  CastListDivItem,
  CastListItemP,
  CastListItemPToo,
  ItemCast,
  ItemPhotoCast,
  ListItemCast,
  Loading,
} from './CastStyles';

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
      {isLoading && <Loading />}

      <ListItemCast>
        {cast &&
          cast.map(e => {
            return (
              <ItemCast key={e.id}>
                <CastListDivItem>
                  <ItemPhotoCast
                    width="150"
                    src={
                      e.profile_path
                        ? `https://image.tmdb.org/t/p/original/${e.profile_path}`
                        : photokino
                    }
                    alt={e.name}
                  />

                  <CastListItemP>{e.name}</CastListItemP>

                  <CastListItemPToo>{e.character}</CastListItemPToo>
                </CastListDivItem>
              </ItemCast>
            );
          })}
      </ListItemCast>
    </div>
  );
};

export default Cast;
