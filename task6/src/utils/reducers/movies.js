import {moviesAction} from '../constans';
// TODO(quinonez): Remove this when API middleware is done
import { movies } from '../../mock_data/movies';


// TODO(quinonez): Set redux flow off line and then move the logic to work with the API
const initialMovies = {
  movies
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case moviesAction.GET_LIST:
      const {genre, sortBy} = action.payload;
      const updatedMovies = movies
                          .filter(movie => genre ? movie.genre === genre : movie)
                          .sort((movieA, movieB) => {
                            switch (sortBy) {
                              case 'date':
                                return movieA.date - movieB.date;
                              case 'title':
                                return movieA.title - movieB.date;
                              case 'rate':
                                return movieA.rate - movieB.rate;
                              default: return 0;
                            }
                          });
      return {
        ...state,
        movies: [...updatedMovies]
      };
    // case moviesAction.ADD_MOVIE:
    default:
      return state;
  }
}
