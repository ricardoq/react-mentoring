import React from 'react';
import './results.scss';
import ResultsHeader from './results-header';
import MovieList from '../../components/movieList/movieList';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {asyncGetMoviesAction} from '../../utils/actions/actionMovies';

function Results() {
  const dispatch = useDispatch();
  const {query} = useParams();
  if (query) {
    dispatch(asyncGetMoviesAction(query));
  }

  return (
    <div className="results">
      <ResultsHeader />
      <MovieList/>
    </div>
  );
}

export default Results;
