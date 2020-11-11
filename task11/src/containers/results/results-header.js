import { connect } from 'react-redux';
import loadable from '@loadable/component';
import React from 'react';
import './results.scss';
import { asyncGetMoviesAction } from '../../utils/actions/actionMovies';

const Filter = loadable(() => import('../../components/filter/filter'));
const Sort = loadable(() => import('../../components/sort/sort'));

function ResultsHeader({getGenre, getSort}) {
  return (
    <div className="resullt-header">
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

// PATTERN: HIGH ORDER COMPONENT
export default React.memo(connect(null, mapDispatchToProps)(ResultsHeader));
