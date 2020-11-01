import { connect } from 'react-redux';
import React from 'react';
import { asyncGetMoviesAction } from '../../utils/actions/actionMovies';
import dynamic from "next/dynamic";

const Filter = dynamic(import('../../components/filter/filter'));
const Sort = dynamic(import('../../components/sort/sort'));

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
