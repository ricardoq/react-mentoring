import React, {useState} from 'react';
import './filter.scss';
import { genresMovie } from '../../utils/constans';


function Filter({filterFunc}) {
  const [selectedState, setSelectedValue] = useState(null);

  const selectFilter = (genre) => {
    setSelectedValue(genre);
    filterFunc(genre);
  };

  return (
    <ul className="genres-list">
      <li>
        <button className={selectedState === null ? 'active':''}
                onClick={e=>selectFilter(null, e)}>
          ALL
        </button>
      </li>
      {
        Object.values(genresMovie).map(
          (genre, index) =>
            <li key={`genre${index}`}>
              <button className={selectedState === genre ? 'active':''}
                      onClick={e=>selectFilter(genre, e)}>
                {genre.toUpperCase()}
              </button>
            </li>
          )
      }
    </ul>
  );
}

export default Filter;
