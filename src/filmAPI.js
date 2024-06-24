import axios from "axios";

// const API_KEY = "df896510ed3c074a2990047ac3d84b6d";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg5NjUxMGVkM2MwNzRhMjk5MDA0N2FjM2Q4NGI2ZCIsIm5iZiI6MTcxOTI2MzQyNy4wNDYxMDUsInN1YiI6IjY2NzlkZjAyZmI4Y2IxYzZjMDU2NWU3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.127RHz_2b0Dim_AMe4gQj9Uw9pyqxdKbAzpP7VV5zaw",
  },
};

export const searchTrendingMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const searchMovies = async ({ key, page }) => {
  const response = await axios.get(
    `/search/movie?query=${key}&include_adult=false&language=en-US&page=${page}`
  );

  return response.data.results;
};

export const searchMovieDetails = async ({ id }) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};

export const searchMovieCredits = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};

export const searchMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};
