import React from 'react';
import './sort.scss';

function Sort({sortFunc}) {
  const handleSort = (e)=>sortFunc(e.target.value);

  return (
    <div className="sort">
      <label className="sort-label">SORT BY</label>
      <select className="sort-value" onChange={handleSort}>
        <option value="date">RELEASE DATE</option>
        <option value="title">TITLE</option>
        <option value="rate">RATE</option>
      </select>
    </div>
  );
}

export default React.memo(Sort);
