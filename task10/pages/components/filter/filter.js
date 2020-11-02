import React, {useState} from 'react';
import style from'./filter.module.scss';
import { genresMovie } from '../../utils/constans';


function Filter({filterFunc}) {
  const [selectedState, setSelectedValue] = useState(null);

  const selectFilter = (genre) => {
    setSelectedValue(genre);
    filterFunc(genre);
  };

  return (
    <ul className={style.genreslist}>
      <li>
        <button className={selectedState === null ? style.active :''}
                onClick={e=>selectFilter(null, e)}>
          ALL
        </button>
      </li>
      {
        Object.values(genresMovie).map(
          (genre, index) =>
            <li key={`genre${index}`}>
              <button className={selectedState === genre ? style.active:''}
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
