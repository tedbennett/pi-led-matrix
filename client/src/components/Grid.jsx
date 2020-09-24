import React from 'react';
import './Grid.css';

const Grid = ({ cells }) => (
  <div className="grid">
    {cells.map(() => <div className="tile" />)}
  </div>
);

export default Grid;
