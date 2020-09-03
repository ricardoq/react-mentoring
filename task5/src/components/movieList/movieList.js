import React from 'react';
import './movieList.scss';
import Movie from '../movie/movie';
import { movies } from '../../mock_data/movies';

function MovieList() {
  return (
    <div className="movie-list">
      <span className="movies-count"><b>{movies.length}</b> Movies found</span>
      <div className="movie-container">
        { movies.map(i => (<Movie key={`mov${i.id}`} movie={i}/>)) }
      </div>
    </div>
  );
}

export default MovieList;
