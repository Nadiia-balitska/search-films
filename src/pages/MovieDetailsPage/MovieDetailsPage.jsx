import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { searchMovieDetails } from "../../filmAPI";
import { Loader } from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const goBack = useRef(location.state || "/movies");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Link to={goBack.current}>Go back</Link>
            <div>
              <img
                src={
                  movie && movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                    : "https://via.placeholder.com/500x281"
                }
                alt={movie.original_title}
              />
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {((movie.vote_average / 10) * 100).toFixed()}% </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3> More informations </h3>
            <div>
              <Link to="cast">Cast</Link>
            </div>

            <div>
              <Link to="reviews">Reviews</Link>
            </div>
          </div>
        </div>
      )}

      <Suspense>
        <Outlet />
      </Suspense>
      {error && <p>{error}</p>}
    </>
  );
};
export default MovieDetailsPage;
