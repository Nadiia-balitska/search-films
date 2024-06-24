import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
import { Suspense } from "react";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.list}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Navigation;
