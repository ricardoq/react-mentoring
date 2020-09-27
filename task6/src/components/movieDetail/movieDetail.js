import React, { useContext } from 'react';
import './movieDetail.scss';
import LogoHeader from '../logoHeader/logoHeader';
import { MovieContext } from '../../utils/contexts/movieContext';
import {connect} from 'react-redux';

function MovieDetail({ movies }) {
  const {movieId} = useContext(MovieContext);
  const {
    title,
    poster,
    rate,
    awards,
    runtime,
    overview,
    date
  } = movies.find((movie) => movie.id === movieId);
  const movieYear = new Date(date).getFullYear();

  return (
    <>
      <LogoHeader isOnDetail={true}/>
      <div className="movie-wrapper">
        <img alt={title} src={poster}/>
        <div className="movie-data">
          <div className="movie-title">
            <h2>{title}</h2>
            <span className="rate">{rate}</span>
            <span className="awards">{awards}</span>
          </div>
          <div className="movie-sinopsis">
            <span>{movieYear}</span>
            <span>{runtime} min</span>
            <p>{overview}</p>
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
