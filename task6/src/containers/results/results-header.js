import { connect } from 'react-redux';
import React from 'react';
import './results.scss';
import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';
import { getListAction } from '../../utils/actions/actionMovies';

function ResultsHeader({getGenre}) {
  return (
    <div className="resullt-header">
      <Filter filterFunc={getGenre}/>
      <Sort />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    getGenre: (genre) => dispatch(getListAction({genre})),
  };
}

export default connect(null, mapDispatchToProps)(ResultsHeader);
