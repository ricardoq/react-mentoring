import React from 'react';
import './movie.scss';
import PropTypes from 'prop-types';

function Movie(props) {
  const {poster = '', title = '', genre = '', year = ''} = props.movie;
  return (
    <div className="movie">
      <img src={poster}/>
      <div className="movie-info">
        <h3>
          {title}
          <span>{genre}</span>
        </h3>
        <span className="year">{year}</span>
      </div>
    </div>
  );
}

Movie.protoTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
}

export default Movie;
