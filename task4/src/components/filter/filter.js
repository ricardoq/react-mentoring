import React from 'react';
import './filter.scss';

function Filter() {
  return (
    <ul className="genres-list">
      <li><button className="active">ALL</button></li>
      <li><button>DOCUMENTARY</button></li>
      <li><button>COMEDY</button></li>
      <li><button>HORROR</button></li>
      <li><button>CRIME</button></li>
    </ul>
  );
}

export default Filter;
