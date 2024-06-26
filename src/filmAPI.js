import axios from "axios";

const API_KEY = "df896510ed3c074a2990047ac3d84b6d";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg5NjUxMGVkM2MwNzRhMjk5MDA0N2FjM2Q4NGI2ZCIsIm5iZiI6MTcxOTI2MzQyNy4wNDYxMDUsInN1YiI6IjY2NzlkZjAyZmI4Y2IxYzZjMDU2NWU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.127RHz_2b0Dim_AMe4gQj9Uw9pyqxdKbAzpP7VV5zaw",
//   },
// };

export const searchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day?language=en-US", {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const searchMovieDetails = async ({ id }) => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const searchMovies = async (query) => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?&include_adult=false&language=en-US&page=1`,
    {
      params: {
        api_key: API_KEY,
        query,
      },
    }
  );

  return results;
};

export const searchMovieCredits = async (id) => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return cast;
};

export const searchMovieReviews = async (id) => {
  const {
    data: { results },
  } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return results;
};
