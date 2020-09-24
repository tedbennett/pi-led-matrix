import React from 'react';
import './Grid.css';



const Grid = ({ cells, setCells }) => {
  const handleClick = (i) => {
    console.log("hi");
    setCells(cells.map((cell, index) => {
      if (i === index) {
        return { colour: "#ffffff" };
      }
      return cell;
    }));
  };

  return (
    <div className="grid">
      {cells.map((cell, index) => <div
        key={index}
        className="tile"
        style={{
          backgroundColor: cell.colour
        }}
        onClick={() => { handleClick(index); }} />
      )}
    </div>
  );
};

export default Grid;
