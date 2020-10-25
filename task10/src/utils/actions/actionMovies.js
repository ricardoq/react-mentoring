import { moviesAction, GET_LIST_URL_FILTERED, GET_LIST_URL, GET_SINGLE_URL } from '../constans';

/**
 * @param {genre, sortBy} filterObject: This object will filter / sort result
 */
export const getListAction = (filterObject) => {
  return {
    type: moviesAction.GET_LIST,
    payload: filterObject,
  };
}

export const getMovieAction = (movieSelected) => {
  return {
    type: moviesAction.SELECT_MOVIE,
    payload: movieSelected,
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

// Async middleware

export const asyncGetMoviesAction = ({searchString, genre, sortBy}) => (dispatch) =>
  fetch(GET_LIST_URL_FILTERED({searchString, genre, sortBy}))
    .then(response => {
      return response.json();
    }).then(response => {
      dispatch(getListAction(response));
    });

export const asyncGetMovieAction = (movieId) => (dispatch) =>
  fetch(GET_SINGLE_URL(movieId))
    .then(response => {
      return response.json();
    }).then(response => {
      dispatch(getMovieAction(response[0]));
    });

export const asyncUpdateMovieAction = (updatedMovie) => (dispatch) => {
  const objectInit = {
    method: 'PATCH',
    body: JSON.stringify(updatedMovie),
    mode: 'cors',
    headers:{
      'Content-Type': 'application/json'
    },
  };
  return fetch(GET_SINGLE_URL(updatedMovie.id), objectInit)
    .then(response => {
      return response.json();
    }).then(() => {
      dispatch(updateMovieAction(updatedMovie));
    });
};

export const asyncAddMovieAction = (newMovie) => (dispatch) => {
  const objectInit = {
    method: 'POST',
    body: JSON.stringify(newMovie),
    mode: 'cors',
    headers:{
      'Content-Type': 'application/json'
    },
  };
  return fetch(GET_LIST_URL, objectInit)
    .then(response => {
      return response.json();
    }).then(() => {
      dispatch(addMovieAction(newMovie));
    });
};
