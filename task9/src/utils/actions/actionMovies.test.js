import { moviesAction, GET_LIST_URL_FILTERED, GET_LIST_URL, GET_SINGLE_URL } from '../constans';
import { movies } from '../../mock_data/movies';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { asyncGetMoviesAction, asyncGetMovieAction, asyncUpdateMovieAction, asyncAddMovieAction } from './actionMovies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initMockStore = {
  movies: [],
  selectedMovie: null,
};

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should call GetList API and action', async () => {
    const filterObj = {
      searchString: 'search',
      genre: '',
      sortBy: '',
    };
    fetchMock.getOnce(GET_LIST_URL_FILTERED(filterObj), {
      body: movies,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: moviesAction.GET_LIST, payload: movies }
    ];

    const store = mockStore(initMockStore);

    await store.dispatch(asyncGetMoviesAction(filterObj));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call GetMovie API and action', async () => {
    const movieId = '123';
    fetchMock.getOnce(GET_SINGLE_URL(movieId), {
      body: movies,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: moviesAction.SELECT_MOVIE, payload: movies[0] }
    ];

    const store = mockStore(initMockStore);

    await store.dispatch(asyncGetMovieAction(movieId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call updateMovie API and action', async () => {
    const movieUpdate = movies[0];

    fetchMock.patchOnce(GET_SINGLE_URL(movieUpdate.id), {
      body: movies,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: moviesAction.UPDATE_MOVIE, payload: movies[0] }
    ];

    const store = mockStore(initMockStore);

    await store.dispatch(asyncUpdateMovieAction(movieUpdate));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should call addMovie API and action', async () => {
    const movieNew = movies[0];

    fetchMock.postOnce(GET_LIST_URL, {
      body: movies,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: moviesAction.ADD_MOVIE, payload: movies[0] }
    ];

    const store = mockStore(initMockStore);

    await store.dispatch(asyncAddMovieAction(movieNew));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
