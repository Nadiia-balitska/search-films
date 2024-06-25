import { searchMovies } from "../../filmAPI";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
// import s from "./MoviesPage.module.css";
import { Loader } from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(query);
        setFilteredMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MovieList movies={filteredMovies} />
        </div>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesPage;
