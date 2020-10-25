import {moviesAction} from '../constans';


const initialMovies = {
  movies: [],
  selectedMovie: null,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case moviesAction.GET_LIST:
      return {
        ...state,
        movies: [...action.payload],
      };
    case moviesAction.SELECT_MOVIE:
        return {
          ...state,
          selectedMovie: action.payload,
        };
    case moviesAction.UPDATE_MOVIE:
      const oldItem = state.movies
                        .find(movie => movie.id === action.payload.id);
      const newItem = {
        ...oldItem,
        ...action.payload,
      };
      return {
        ...state,
        movies: state.movies.map(movie =>
                  movie.id === action.payload.id ? newItem : movie),
      }
    case moviesAction.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
}
