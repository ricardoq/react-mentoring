import React from 'react';
import style from './results.module.scss';
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
    <div className={style.results}>
      <ResultsHeader />
      <MovieList/>
    </div>
  );
}

export default Results;
