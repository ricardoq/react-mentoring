import React from 'react';
import {connect} from 'react-redux';

import './movieList.scss';
import Movie from '../movie/movie';

function MovieList({movies = []}) {
  console.log(movies)
  return (
    <div className="movie-list">
      <span className="movies-count"><b>{movies.length}</b> Movies found</span>
      <div className="movie-container">
        { movies.map(movie => (<Movie key={`mov${movie.id}`} movie={movie}/>)) }
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  const {movies} = state;
  return {movies}
};

export default connect(mapStatetoProps)(MovieList);
