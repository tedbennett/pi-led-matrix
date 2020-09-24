import React, { useState } from 'react';
import Grid from './components/Grid';


const cell = {
  colour: '#000000',
};

const grid = new Array(64).fill().map(() => cell);


function App() {
  const [cells, setCells] = useState(grid);
  return (
    <div>
      <h1>Draw Something!</h1>
      <Grid cells={cells} setCells={setCells} />
    </div>
  );
}

export default App;
