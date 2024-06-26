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

    const fetchCast = async () => {
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
    fetchCast();
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
                    : "https://th.bing.com/th/id/OIP.gTwPTarE-W9RA1XI69FVmQHaNU?w=135&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
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
