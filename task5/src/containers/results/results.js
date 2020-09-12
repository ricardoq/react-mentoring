import React from 'react';
import './results.scss';
import ResultsHeader from './results-header';
import MovieList from '../../components/movieList/movieList';

function Results() {
  return (
    <div className="results">
      <ResultsHeader />
      <MovieList/>
    </div>
  );
}

export default Results;
