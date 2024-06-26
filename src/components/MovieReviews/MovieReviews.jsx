import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieReviews } from "../../filmAPI";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await searchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {reviews.length === 0 && <p>We did not find anything</p>}
          {reviews.length > 0 && (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <h4>Author: {review.author}</h4>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default MovieReviews;
