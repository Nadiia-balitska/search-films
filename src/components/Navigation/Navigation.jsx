import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
import { Suspense } from "react";

// import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";

const buildLinkClass = ({ isActive }) => {
  return clsx("hover:text-dark-500", isActive && s.active);
};

const Navigation = () => {
  //   const [activeSearch, setActiveSearch] = useState(false);

  //   const location = useLocation();

  //   useEffect(() => {
  //     setActiveSearch(location.pathname === "/movies");
  //   }, [location]);

  return (
    <>
      {/* <header className={s.header}>
        <nav className={s.list}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
        {activeSearch && <SearchBar />}
      </header> */}
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
export default Navigation;
