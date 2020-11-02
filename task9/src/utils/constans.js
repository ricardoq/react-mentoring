import { createStore, applyMiddleware, compose } from 'redux';
import { moviesReducer } from './reducers/movies';
import thunk from 'redux-thunk';

const API_VERSION = '1.0.5';
export const BASE_URL = `http://virtserver.swaggerhub.com/ricardoq/movies_api/${API_VERSION}/`;
export const GET_LIST_URL_FILTERED = ({searchString, genre, sortBy}) => `${BASE_URL}movies?searchString=${searchString}&genre=${genre}&sortBy=${sortBy}`;
export const GET_LIST_URL = `${BASE_URL}movies`;
export const GET_SINGLE_URL = (id) => `${BASE_URL}movie/${id}`;

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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  moviesReducer,
  composeEnhancer(applyMiddleware(thunk))
);
