import { getReviews } from 'components/APP/App';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      setIsLoading(true);
      const { results } = await getReviews(movieId);
      setReviews(results);
      setIsLoading(false);
    }
    getReviewsMovie();
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
