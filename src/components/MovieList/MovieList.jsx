import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

export const base_url = "https://image.tmdb.org/t/p/";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location} className={s.item}>
            {/* <p>{movie.title}</p> */}
            <div className={s.img_wrapper}>
              <img
                src={
                  movie?.backdrop_path
                    ? `${base_url}w500/${movie.backdrop_path}`
                    : "https://th.bing.com/th/id/OIP.gTwPTarE-W9RA1XI69FVmQHaNU?w=135&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                }
                alt={movie.title}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
