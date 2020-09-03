import React, {useContext} from 'react';
import './header.scss';
import LogoHeader from '../../components/logoHeader/logoHeader';
import Search from '../../components/search/search';
import { MovieContext } from '../../utils/contexts/movieContext';
import MovieDetail from '../../components/movieDetail/movieDetail';

function Header() {
  const {movieId} = useContext(MovieContext);

  return (
    <div className="header">
      {
        movieId ? (<>
          <MovieDetail/>
        </>) :
        ( <>
            <LogoHeader isOnDetail={false}></LogoHeader>
            <Search/>
          </> )
      }
    </div>
  );
}

export default Header;
