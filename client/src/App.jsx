import React from 'react';
import Grid from './components/Grid';


const cell = {
  colour: '#000000',
};

const cells = new Array(64).fill().map(() => cell);


function App() {
  return (
    <div>
      <h1>Draw Something!</h1>
      <Grid cells={cells} />
    </div>
  );
}

export default App;
