import React from 'react';
import { movies } from '../../mock_data/movies';
import { moviesReducer } from './movies';
import { moviesAction } from '../constans';

const initialState = {
  movies: [],
  selectedMovie: null,
};

describe('movies reducer', () => {
  it('should return initial state', () => {
    expect(moviesReducer(undefined, {type: 'default'})).toEqual(initialState);
  });

  it('should return updated state on getList', () => {
    const expectedState = {
      ...initialState,
      movies,
    }
    expect(
      moviesReducer(
        initialState,
        {type: moviesAction.GET_LIST, payload: movies}
      )
    ).toEqual(expectedState);
  });

  it('should return selected state on getList', () => {
    const expectedState = {
      ...initialState,
      selectedMovie: movies[0],
    }
    expect(
      moviesReducer(
        initialState,
        {type: moviesAction.SELECT_MOVIE, payload: movies[0]}
      )
    ).toEqual(expectedState);
  });

  it('should return update state on getList', () => {
    const movieUpdate = {
      ...movies[0],
      title: '123',
    }
    const expectedState = {
      ...initialState,
      movies: movies.map(mov =>
        mov.id === movieUpdate.id ? {...mov, title: '123'}: mov),
    }
    expect(
      moviesReducer( {
          ...initialState,
          movies: movies,
        },
        {type: moviesAction.UPDATE_MOVIE, payload: movieUpdate}
      )
    ).toEqual(expectedState);
  });

  it('should return add state on getList', () => {
    const movieAdd = {
      ...movies[0],
      id: 'test',
      title: '123',
    }
    const expectedState = {
      ...initialState,
      movies: [
        ...movies,
        movieAdd,
      ]
    }
    expect(
      moviesReducer( {
          ...initialState,
          movies: movies,
        },
        {type: moviesAction.ADD_MOVIE, payload: movieAdd}
      )
    ).toEqual(expectedState);
  });
});

