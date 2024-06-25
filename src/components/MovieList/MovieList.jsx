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
            <div className={s.img_wrapper}>
              <img
                src={
                  movie.backdrop_path
                    ? `${base_url}w200/${movie.backdrop_path}`
                    : "https://prescotthobbies.com/wp-content/uploads/2019/12/image-not-available-684f2d57b8fb401a6846574ad4d7173be03aab64aac30c989eba8688ad9bfa05.png"
                }
                alt={movie.title}
              />
            </div>
            <p className={s.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
