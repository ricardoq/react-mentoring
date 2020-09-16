import {moviesAction} from '../constans';
// TODO(quinonez): Remove this when API middleware is done
import { movies } from '../../mock_data/movies';


// TODO(quinonez): Set redux flow off line and then move the logic to work with the API
const initialMovies = {
  movies,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case moviesAction.GET_LIST:
      const { genre, sortBy } = action.payload;
      let updatedMovies = sortBy ? state.movies : movies;

      return {
        ...state,
        movies: [
          ...updatedMovies
            .filter((movie) => (genre ? movie.genre === genre : movie))
            .sort((movieA, movieB) => {
              switch (sortBy) {
                case "date":
                  return new Date(movieA.date) - new Date(movieB.date);
                case "title":
                  return ("" + movieA.title).localeCompare(movieB.title);
                case "rate":
                  return movieB.rate - movieA.rate;
                default:
                  return 0;
              }
            }),
        ],
      };
    case moviesAction.UPDATE_MOVIE:
      const oldItem = initialMovies.movies
                        .find(movie => movie.id === action.payload.id);
      const newItem = {
        ...oldItem,
        ...action.payload,
      };
      return {
        ...state,
        movies: initialMovies.movies.map(movie =>
                  movie.id === action.payload.id ? newItem : movie),
      }
    case moviesAction.ADD_MOVIE:
      return {
        ...state,
        movies: [...movies, action.payload],
      };
    default:
      return state;
  }
}
