import axios from "axios";

const DEFAULTE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "06b5777bd7091c31d1100bb540924fed";

const makeRequest = (path, params) =>
  axios.get(`${DEFAULTE_URL}${path}`, {
    params: {
      ...params,
      api_key: TMDB_API_KEY,
    },
  });

const getRequest = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getRequest("/movie/now_playing"),
  popular: () => getRequest("/movie/popular"),
  upcoming: () => getRequest("/movie/upcoming", { region: "kr" }),
  search: (query) => getRequest("/search/movie", { query }),
  movie: (id) => getRequest(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getRequest("/discover/movie"),
};

export const tvApi = {
  today: () => getRequest("/tv/airing_today"),
  thisWeek: () => getRequest("/tv/on_the_air"),
  topRated: () => getRequest("/tv/top_rated"),
  popular: () => getRequest("/tv/popular"),
  search: (query) => getRequest("/search/tv", { query }),
  show: (id) => getRequest(`/tv/${id}`, { append_to_response: "videos" }),
};

export const apiImage = (
  path,
  defaultPoster = "https://www.prokerala.com/movies/assets/img/no-poster-available.webp"
) => (path ? `https://image.tmdb.org/t/p/original${path}` : defaultPoster);
