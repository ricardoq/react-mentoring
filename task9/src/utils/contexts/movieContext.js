import {createContext} from 'react';

export const MovieContext = createContext({
  movieId: null,
  changeMovie: (val) => {}
});
