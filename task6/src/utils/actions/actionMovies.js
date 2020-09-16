import { moviesAction } from '../constans';

/**
 *
 * @param {genre, sortBy} filterObject: This object will filter / sort result
 */
export const getListAction = (filterObject) => {
  return {
    type: moviesAction.GET_LIST,
    payload: filterObject,
  };
}

export const updateMovieAction = (updates) => {
  return {
    type: moviesAction.UPDATE_MOVIE,
    payload: updates
  };
}

export const addMovieAction = (newMovie) => {
  return {
    type: moviesAction.ADD_MOVIE,
    payload: newMovie,
  };
}
