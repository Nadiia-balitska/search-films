import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { searchMovieDetails } from "../../filmAPI";
import { Loader } from "../../components/Loader/Loader";
import { base_url } from "../../components/MovieList/MovieList";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBack = useRef(location.state || "/movies");

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div>
            <Link path={goBack.current}>Go back</Link>
            <div>
              <img
                src={`${base_url}w500/${movie.still_path}`}
                alt={movie.title}
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
