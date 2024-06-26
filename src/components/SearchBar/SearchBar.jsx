import { useSearchParams } from "react-router-dom";
// import s from "./SearchBar.module.css";
import { toast } from "react-toastify";
import { useState } from "react";

export const SearchBar = () => {
  const [movie, setMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get("movie");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!e.target.elements.text.value.trim()) {
      toast.error("Enter searched film");
      return;
    }
    setSearchParams({ query: movie });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setMovie(e.target.value);
          }}
          name="text"
          type="text"
          placeholder="Search movie..."
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
};
