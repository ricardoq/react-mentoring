import React from 'react';
import loadable from '@loadable/component';
import './movieDetail.scss';
import {connect} from 'react-redux';

const LogoHeader = loadable(() => import('../logoHeader/logoHeader'));

function MovieDetail({ selectedMovie }) {
  const {
    title = '',
    poster = '',
    rate = '',
    awards = '',
    runtime = '',
    overview = '',
    date = new Date()
  } = selectedMovie || {};
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
  const {selectedMovie} = state;
  return {selectedMovie};
};

// PATTERN: HIGH ORDER COMPONENT
export default React.memo(connect(mapStatetoProps)(MovieDetail));
