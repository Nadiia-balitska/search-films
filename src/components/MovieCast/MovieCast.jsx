import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieCredits } from "../../filmAPI";
import { Loader } from "../Loader/Loader";

const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchCredits = async () => {
      try {
        setLoading(true);
        const actors = await searchMovieCredits(movieId);
        setActors(actors);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor?.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : "https://via.placeholder.com/200x300"
                }
                alt={actor.name}
              />
              <div>
                <h3>Name: {actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Something went wrong. Type of error: {error}</p>}
    </>
  );
};
export default MovieCast;
