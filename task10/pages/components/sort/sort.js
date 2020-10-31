import React from 'react';
import style from './sort.module.scss';

function Sort({sortFunc}) {
  return (
    <div className={style.sort}>
      <label className={style.sortlabel}>SORT BY</label>
      <select className={style.sortvalue} onChange={(e)=>sortFunc(e.target.value)}>
        <option value="date">RELEASE DATE</option>
        <option value="title">TITLE</option>
        <option value="rate">RATE</option>
      </select>
    </div>
  );
}

export default Sort;
