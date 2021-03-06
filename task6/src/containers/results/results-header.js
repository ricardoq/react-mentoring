import { connect } from 'react-redux';
import React from 'react';
import './results.scss';
import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';
import { getListAction } from '../../utils/actions/actionMovies';

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
    getGenre: (genre) => dispatch(getListAction({genre})),
    getSort: (sortBy) =>dispatch(getListAction({sortBy}))
  };
}

export default connect(null, mapDispatchToProps)(ResultsHeader);
