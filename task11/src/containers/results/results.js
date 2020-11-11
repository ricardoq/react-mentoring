import React from 'react';
import loadable from '@loadable/component';
import './results.scss';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {asyncGetMoviesAction} from '../../utils/actions/actionMovies';

const ResultsHeader = loadable(() => import('./results-header'));
const MovieList = loadable(() => import('../../components/movieList/movieList'));

function Results() {
  const dispatch = useDispatch();
  const {query} = useParams();
  if (query) {
    dispatch(asyncGetMoviesAction({searchString: query}));
  }

  return (
    <div className="results">
      <ResultsHeader />
      <MovieList/>
    </div>
  );
}

export default Results;
