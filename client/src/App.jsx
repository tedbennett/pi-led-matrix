import React, { useState } from 'react';
import Grid from './components/Grid';
import Colours from './components/Colours';
import './App.css';

const cell = {
  colour: '#ffffff',
};

const grid = new Array(64).fill().map(() => cell);


function App() {
  const [cells, setCells] = useState(grid);
  const [currentColour, setCurrentColour] = useState('#000000');

  const clearGrid = () => {
    setCells(cells.map(() => cell));
  };

  return (
    <div className="container">
      <div className="center">
        <h1 >Draw Something!</h1>
      </div>
      <Colours currentColour={currentColour} setCurrentColour={setCurrentColour} />
      <Grid cells={cells} setCells={setCells} currentColour={currentColour} />
      <button style={{ margin: "10px" }}>Upload</button>
      <button style={{ margin: "10px" }} onClick={clearGrid}>Clear</button>
    </div >
  );
}

export default App;
