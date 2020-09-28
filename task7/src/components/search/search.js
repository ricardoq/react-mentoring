import React from 'react';
import './search.scss';
import Button from '../../utils/button/button';

function Search() {
  return (
    <div className="search">
      <h2>FIND YOUR MOVIE</h2>
      <div className="search-input">
        <input placeholder="What do you want to watch?"/>
        <Button className="search-btn">SEARCH</Button>
      </div>
    </div>
  );
}

export default Search;
