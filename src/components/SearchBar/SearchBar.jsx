import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSearchParams } from "react-router-dom";
import s from "./SearchBar.module.css";
import * as Yup from "yup";
import { toast } from "react-toastify";

const initialValues = { text: "" };

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(1, "To short text")
    .max(15, "To long text")
    .required("Enter films"),
});

//   const [searchValue, setSearchValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get("query");
  const onSubmit = async (query) => {
    if (query === value) return;
    setSearchParams({ query });
    // setError(null);
    // setPage(1);
  };

  const submitForm = (values, actions) => {
    if (!values.text.trim()) {
      toast.error("Enter searched film");
      return;
    }

    onSubmit(values.text);
    actions.resetForm();
  };

  return (
    <header>
      <Formik
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
      </Formik>
    </header>
  );
};
