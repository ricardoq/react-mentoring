import React from 'react';
import style from './results.module.scss';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {asyncGetMoviesAction} from '../../utils/actions/actionMovies';
import dynamic from "next/dynamic";

const ResultsHeader = dynamic(import('./results-header'));
const MovieList = dynamic(import('../../components/movieList/movieList'));

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
