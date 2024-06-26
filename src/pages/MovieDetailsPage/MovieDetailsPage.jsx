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

  const goBack = useRef(location.state?.from || "/");

  const path =
    movie?.poster_path ||
    movie?.backdrop_path ||
    "https://prescotthobbies.com/wp-content/uploads/2019/12/image-not-available-684f2d57b8fb401a6846574ad4d7173be03aab64aac30c989eba8688ad9bfa05.png";

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

  if (!movie) return null;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div>
            <Link to={goBack.current}>Go back</Link>
            <div>
              <img src={`${base_url}w500/${path}`} alt={movie?.title} />
            </div>
            <div>
              <h2>{movie?.title}</h2>
              <p>
                User Score: {((movie?.vote_average / 10) * 100).toFixed()}%{" "}
              </p>
              <h3>Overview</h3>
              <p>{movie?.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie?.genres?.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3> More informations </h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
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
