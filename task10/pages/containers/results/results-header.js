import { connect } from 'react-redux';
import React from 'react';
import style from './results.module.scss';
import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';
import { asyncGetMoviesAction } from '../../utils/actions/actionMovies';

function ResultsHeader({getGenre, getSort}) {
  return (
    <div className="result-header">
      <Filter filterFunc={getGenre}/>
      <Sort sortFunc={getSort}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGenre: (genre) => dispatch(asyncGetMoviesAction({genre})),
    getSort: (sortBy) =>dispatch(asyncGetMoviesAction({sortBy}))
  };
}

export default connect(null, mapDispatchToProps)(ResultsHeader);
