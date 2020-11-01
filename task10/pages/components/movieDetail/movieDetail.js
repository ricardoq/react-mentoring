import React from 'react';
import style from './movieDetail.module.scss';
import {connect} from 'react-redux';
import dynamic from "next/dynamic";

const LogoHeader = dynamic(import('../logoHeader/logoHeader'));

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
      <div className={style.movie-wrapper}>
        <img alt={title} src={poster}/>
        <div className={style.movie-data}>
          <div className={style.movie-title}>
            <h2>{title}</h2>
            <span className={style.rate}>{rate}</span>
            <span className={style.awards}>{awards}</span>
          </div>
          <div className={style.movie-sinopsis}>
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

export default connect(mapStatetoProps)(MovieDetail);
