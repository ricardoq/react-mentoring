import React, {useState} from 'react';
import './search.scss';
import { Link } from "react-router-dom";

function Search() {
  const [searchCriteria, setSearchCriteria] = useState(null);

  return (
    <div className="search">
      <h2>FIND YOUR MOVIE</h2>
      <div className="search-input">
        <input placeholder="What do you want to watch?"
               onChange={(e) => setSearchCriteria(e.target.value)}/>
        <Link className="search-btn"
              to={searchCriteria ? `/search/${searchCriteria}` : '/'}>
          SEARCH
        </Link>
      </div>
    </div>
  );
}

export default Search;
