import { useEffect, useState } from "react";
import { searchTrendingMovies } from "../../filmAPI";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchTrendingMovies();
        setFilms(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>You can see trending movies for today:</h1>
          {films.length > 0 && <MovieList movies={films} location={location} />}
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};
export default HomePage;
