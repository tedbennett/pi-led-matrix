import React, { useState } from 'react';
import Grid from './components/Grid';
import Colours from './components/Colours';

const cell = {
  colour: '#ffffff',
};

const grid = new Array(64).fill().map(() => cell);


function App() {
  const [cells, setCells] = useState(grid);
  const [currentColour, setCurrentColour] = useState('#ffffff');

  return (
    <div>
      <h1>Draw Something!</h1>
      <Colours currentColour={currentColour} setCurrentColour={setCurrentColour} />
      <Grid cells={cells} setCells={setCells} currentColour={currentColour} />
      <button style={{ margin: "10px" }}>Upload</button>
      <button style={{ margin: "10px" }}>Clear</button>
    </div>
  );
}

export default App;
