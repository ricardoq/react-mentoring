const API_VERSION = '1.0.4';
export const BASE_URL = `http://virtserver.swaggerhub.com/ricardoq/movies_api/${API_VERSION}/`;
export const GET_LIST_URL = `${BASE_URL}movies`;

export const moviesAction = {
  INIT_STATE: 'INIT_STATE',
  GET_LIST: 'GET_LIST',
  ADD_MOVIE: 'ADD_MOVIE',
  UPDATE_MOVIE: 'UPDATE_MOVIE',
  SELECT_MOVIE: 'SELECT_MOVIE',
}

export const genresMovie = {
  ACTION: 'Action',
  COMEDY: 'Comedy',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  HORROR: 'Horror',
}
