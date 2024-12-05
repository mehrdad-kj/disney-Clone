import axios from "axios";

//https://api.themoviedb.org/3/trending/all/day?api_key=b04da5e5c3fbb7be503b1273ddeae900

const movieBaseURL = "https://api.themoviedb.org/3";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


const API_KEY = "b04da5e5c3fbb7be503b1273ddeae900";

const getTrendingMovies = axios.get(
  movieBaseURL + "/trending/all/day?api_key=" + API_KEY
);
const getMovieByGenereId = (id: number) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingMovies,
  getMovieByGenereId
};
