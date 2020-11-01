import React from 'react';
import style from './header.module.scss';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {asyncGetMovieAction} from '../../utils/actions/actionMovies';
import dynamic from "next/dynamic";

const LogoHeader = dynamic(import('../../components/logoHeader/logoHeader'));
const Search = dynamic(import('../../components/search/search'));
const MovieDetail = dynamic(import('../../components/movieDetail/movieDetail'));

function Header() {
  const dispatch = useDispatch();
  const {movieId} = useParams();
  if (movieId) {
    dispatch(asyncGetMovieAction(movieId));
  }

  return (
    <div className={style.header}>
      {
        movieId ? <MovieDetail/> :
        <>
            <LogoHeader isOnDetail={false}></LogoHeader>
            <Search/>
        </>
      }
    </div>
  );
}

export default Header;
