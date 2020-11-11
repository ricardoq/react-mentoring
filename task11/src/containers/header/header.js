import React from 'react';
import loadable from '@loadable/component';
import './header.scss';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {asyncGetMovieAction} from '../../utils/actions/actionMovies';

const LogoHeader = loadable(() => import('../../components/logoHeader/logoHeader'));
const Search = loadable(() => import('../../components/search/search'));
const MovieDetail = loadable(() => import('../../components/movieDetail/movieDetail'));

function Header() {
  const dispatch = useDispatch();
  const {movieId} = useParams();
  if (movieId) {
    dispatch(asyncGetMovieAction(movieId));
  }

  return (
    <div className="header">
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
