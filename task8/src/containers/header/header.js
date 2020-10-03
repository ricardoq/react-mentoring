import React from 'react';
import './header.scss';
import LogoHeader from '../../components/logoHeader/logoHeader';
import Search from '../../components/search/search';
import MovieDetail from '../../components/movieDetail/movieDetail';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {asyncGetMovieAction} from '../../utils/actions/actionMovies';

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
