import {moviesAction} from '../constans';


const initialMovies = {
  fullMovies: [],
  movies: [],
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case moviesAction.GET_LIST:
      const { genre, sortBy } = action.payload;
      let updatedMovies = sortBy ? state.movies : state.fullMovies;

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
      const oldItem = state.fullMovies
                        .find(movie => movie.id === action.payload.id);
      const newItem = {
        ...oldItem,
        ...action.payload,
      };
      return {
        ...state,
        fullMovies: state.fullMovies.map(movie =>
                  movie.id === action.payload.id ? newItem : movie),
        movies: state.fullMovies.map(movie =>
                  movie.id === action.payload.id ? newItem : movie),
      }
    case moviesAction.ADD_MOVIE:
      return {
        ...state,
        fullMovies: [...state.movies, action.payload],
        movies: [...state.movies, action.payload],
      };
    case moviesAction.INIT_STATE:
      return {
        ...state,
        fullMovies: [...action.payload],
        movies: [...action.payload],
      };
    default:
      return state;
  }
}
