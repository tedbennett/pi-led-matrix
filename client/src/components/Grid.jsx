import React from 'react';
import './Grid.css';

const Grid = ({ cells, setCells, currentColour }) => {

  const handleClick = (i, e) => {
    if (e.buttons === 1) {
      setCells(cells.map((cell, index) => {
        if (i === index) {
          return { colour: currentColour };
        }
        return cell;
      }));
    }
  };

  return (
    <div className="grid">
      {cells.map((cell, index) => <div
        key={index}
        className="tile"
        style={{
          backgroundColor: cell.colour
        }}
        onMouseDown={(e) => handleClick(index, e)}
        onMouseOver={(e) => handleClick(index, e)}
      />
      )}
    </div>
  );
};

export default Grid;
