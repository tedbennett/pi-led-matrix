import React from 'react';
import './Grid.css';

const Grid = ({ cells, setCells, currentColour }) => {

  const updateCells = (i) => {
    setCells(cells.map((cell, index) => {
      if (i === index) {
        return { colour: currentColour };
      }
      return cell;
    }));
  };

  const handleClick = (i, e) => {
    e.preventDefault();
    if (e.buttons === 1) {
      updateCells(i);
    }
  };

  const handleTouch = (i, e) => {
    e.preventDefault();
    updateCells(i);
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
        onTouchStart={(e) => handleTouch(index, e)}
        onTouchMove={(e) => handleTouch(index, e)}
      />
      )}
    </div>
  );
};

export default Grid;
