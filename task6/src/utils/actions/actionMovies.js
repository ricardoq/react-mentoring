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

export const addMovieAction = () => {
  return {
    type: moviesAction.ADD_MOVIE,
  };
}
