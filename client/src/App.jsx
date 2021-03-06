import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Grid from './components/Grid';
import Colours from './components/Colours';
import './App.css';


const cell = {
  colour: '#000000',
};

const grid = new Array(64).fill().map(() => cell);

const config = {
  apiKey: "AIzaSyBS7bgQOdrAYZmk8NzBkBdO-ZT-CF7c_Ho",
  authDomain: "pi-drawing.firebaseapp.com",
  databaseURL: "https://pi-drawing.firebaseio.com",
  projectId: "pi-drawing",
  storageBucket: "pi-drawing.appspot.com",
  messagingSenderId: "306617422858",
  appId: "1:306617422858:web:69f28efab0182961837bf3"
};
const app = firebase.initializeApp(config);

function App() {
  const [cells, setCells] = useState(grid);
  const [currentColour, setCurrentColour] = useState('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));

  const clearGrid = () => {
    setCells(cells.map(() => cell));
  };

  const uploadToFirebase = () => {
    app.database().ref('data/1').set(cells.map((cell) => cell.colour).join());
  };

  return (
    <div className="container">
      <div className="center">
        <h1 >Draw Something!</h1>
      </div>
      <Colours currentColour={currentColour} setCurrentColour={setCurrentColour} />
      <Grid cells={cells} setCells={setCells} currentColour={currentColour} />
      <button style={{ margin: "10px" }} onClick={uploadToFirebase}>Upload</button>
      <button style={{ margin: "10px" }} onClick={clearGrid}>Clear</button>
    </div >
  );
}

export default App;
