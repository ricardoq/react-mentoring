import React, { useContext } from 'react';
import './movieDetail.scss';
import LogoHeader from '../logoHeader/logoHeader';
import { MovieContext } from '../../utils/contexts/movieContext';
import {connect} from 'react-redux';

function MovieDetail({ movies }) {
  const {movieId} = useContext(MovieContext);
  const selectedMovie = movies.find((movie) => movie.id === movieId);
  const movieYear = new Date(selectedMovie.date).getFullYear();

  return (
    <>
      <LogoHeader isOnDetail={true}/>
      <div className="movie-wrapper">
        <img alt={selectedMovie.title} src={selectedMovie.poster}/>
        <div className="movie-data">
          <div className="movie-title">
            <h2>{selectedMovie.title}</h2>
            <span className="rate">{selectedMovie.rate}</span>
            <span className="awards">{selectedMovie.awards}</span>
          </div>
          <div className="movie-sinopsis">
            <span>{movieYear}</span>
            <span>{selectedMovie.runtime} min</span>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStatetoProps = (state) => {
  const {movies} = state;
  return {movies};
};

export default connect(mapStatetoProps)(MovieDetail);
