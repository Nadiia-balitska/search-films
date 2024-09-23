import { useEffect, useState } from "react";
import { searchTrendingMovies } from "../../filmAPI";
import MovieList from "../../components/MovieList/MovieList";
// import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import UserBar from "../../components/UserBar/UserBar";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //   const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { results } = await searchTrendingMovies();
        setFilms(results);
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
          <UserBar />
          <h1>You can see trending movies for today:</h1>
          {films.length > 0 && <MovieList movies={films} />}
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
};
export default HomePage;
