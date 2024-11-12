import React from 'react';
import './css/Column.css';

const Column = ({title, grouping, children}) => {
  return (
    <div className="column">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Column;

