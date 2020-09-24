import React, { useState } from 'react';
import Grid from './components/Grid';
import Colours from './components/Colours';

const cell = {
  colour: '#000000',
};

const grid = new Array(64).fill().map(() => cell);


function App() {
  const [cells, setCells] = useState(grid);
  return (
    <div>
      <h1>Draw Something!</h1>
      <Colours />
      <Grid cells={cells} setCells={setCells} />
    </div>
  );
}

export default App;
