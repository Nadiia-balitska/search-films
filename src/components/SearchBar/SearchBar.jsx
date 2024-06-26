// import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSearchParams } from "react-router-dom";
// import s from "./SearchBar.module.css";
// import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";

// const initialValues = { text: "" };

// const validationSchema = Yup.object().shape({
//   text: Yup.string()
//     .min(1, "To short text")
//     .max(15, "To long text")
//     .required("Enter films"),
// });

//   const [searchValue, setSearchValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);

export const SearchBar = () => {
  const [movie, setMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!e.target.elements.text.value.trim()) {
      toast.error("Enter searched film");
      return;
    }
    setSearchParams({ query: movie });
  };

  //     const query = searchParams.get("query");
  //     setSearchParams({ query: movie });
  //   };

  //   if (!value.text.trim()) {
  //     toast.error("Enter searched film");
  //     return;
  //   }
  // const submitForm = (values, actions) => {
  //   if (!values.text.trim()) {
  //     toast.error("Enter searched film");
  //     return;
  //   }

  //     onSubmit(values.text);
  //     actions.resetForm();
  //   };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setMovie(e.target.value);
          }}
          type="text"
          placeholder="Search movie..."
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {/* <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <Field
            type="text"
            autoComplete="off"
            placeholder="Search films"
            name="text"
            className={s.input}
          />
          <ErrorMessage className={s.error} name="text" component="span" />
          <button onSubmit={onSubmit} className={s.button} type="submit">
            Search film
          </button>
        </Form>
      </Formik> */}
    </>
  );
};
