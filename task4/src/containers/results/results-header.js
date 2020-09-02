import React from 'react';
import './results.scss';
import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';

function ResultsHeader() {
  return (
    <div className="resullt-header">
      <Filter/>
      <Sort />
    </div>
  );
}

export default ResultsHeader;
