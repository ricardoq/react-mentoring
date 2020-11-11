import React from 'react';
import {connect} from 'react-redux';

import './movieList.scss';
import Movie from '../movie/movie';

function MovieList({movies = []}) {
  return (
    <div className="movie-list">
      <span className="movies-count"><b>{movies.length}</b> Movies found</span>
      <div className="movie-container">
        { movies.length ?
          movies.map(movie => (<Movie key={`mov${movie.id}`} movie={movie}/>)) :
          <h2>No Movie Found</h2> }
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  const {movies} = state;
  return {movies}
};

export default connect(mapStatetoProps)(MovieList);
