import React, {useState} from 'react';
import style from './search.module.scss';
import { Link } from "react-router-dom";

function Search() {
  const [searchCriteria, setSearchCriteria] = useState(null);

  return (
    <div className={style.search}>
      <h2>FIND YOUR MOVIE</h2>
      <div className={style.searchInput}>
        <input placeholder="What do you want to watch?"
               onChange={(e) => setSearchCriteria(e.target.value)}/>
        <Link className={style.searchBtn}
              to={searchCriteria ? `/search/${searchCriteria}` : '/'}>
          SEARCH
        </Link>
      </div>
    </div>
  );
}

export default Search;
