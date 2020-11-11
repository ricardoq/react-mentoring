import React, {useState} from 'react';
import './filter.scss';
import { genresMovie } from '../../utils/constans';


function Filter({filterFunc}) {
  const [selectedState, setSelectedValue] = useState(null);

  const selectFilter = (genre) => {
    setSelectedValue(genre);
    filterFunc(genre);
  };

  const handleSelect = e=>selectFilter(null, e);

  return (
    <ul className="genres-list">
      <li>
        <button className={selectedState === null ? 'active':''}
                onClick={handleSelect}>
          ALL
        </button>
      </li>
      {
        Object.values(genresMovie).map(
          (genre, index) =>
            <li key={`genre${index}`}>
              <button className={selectedState === genre ? 'active':''}
                      onClick={handleSelect}>
                {genre.toUpperCase()}
              </button>
            </li>
          )
      }
    </ul>
  );
}

export default React.memo(Filter);
