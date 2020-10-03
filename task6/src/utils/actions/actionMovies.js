import { moviesAction } from '../constans';

/**
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

export const initStateAction = (apiList) => {
  return {
    type: moviesAction.INIT_STATE,
    payload: apiList,
  };
}

// Async middleware

export const asyncInitMoviesAction = () => (dispatch) => {
  fetch('http://virtserver.swaggerhub.com/ricardoq/movies_api/1.0.5/movies')
    .then(response => {
      return response.json();
    }).then(response => {
      dispatch(initStateAction(response));
    });
};

export const asyncUpdateMovieAction = (updatedMovie) => (dispatch) => {
  const objectInit = {
    method: 'PATCH',
    body: JSON.stringify(updatedMovie),
    mode: 'cors',
    headers:{
      'Content-Type': 'application/json'
    },
  };
  fetch(`http://virtserver.swaggerhub.com/ricardoq/movies_api/1.0.5/movie/${updatedMovie.id}`,
        objectInit)
    .then(response => {
      return response.json();
    }).then(response => {
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
  fetch('http://virtserver.swaggerhub.com/ricardoq/movies_api/1.0.5/movies',
        objectInit)
    .then(response => {
      return response.json();
    }).then((response) => {
      dispatch(addMovieAction(response));
    });
};
