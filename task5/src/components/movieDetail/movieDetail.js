import React, { useContext } from 'react';
import './movieDetail.scss';
import LogoHeader from '../logoHeader/logoHeader';
import { MovieContext } from '../../utils/contexts/movieContext';
import { movies } from '../../mock_data/movies';

function MovieDetail() {
  const {movieId} = useContext(MovieContext);
  const selectedMovie = movies.find((movie) => movie.id === movieId);

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
            <span>{selectedMovie.year}</span>
            <span>{selectedMovie.duration} min</span>
            <p>{selectedMovie.sinopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default MovieDetail;
