import React from 'react';
import {connect} from 'react-redux';

import style from './movieList.module.scss';
import Movie from '../movie/movie';

function MovieList({movies = []}) {
  return (
    <div className={style.movielist}>
      <span className={style.moviescount}><b>{movies.length}</b> Movies found</span>
      <div className={style.moviecontainer}>
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
