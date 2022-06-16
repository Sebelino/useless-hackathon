import React, { useState } from 'react';
import './App.css';
import Controls from './Controls';
import { Calculator } from './features/calculator';
import { Timer } from './features/timer';

const App = () => {
  const [mode, setMode] = useState(0);
  const [speed, setSpeed] = useState(0);

  return (
    <div className="App">
      <div className="App__column">
        <Controls onChangeMode={setMode} onChangeSpeed={setSpeed} />
      </div>

      <div className="App__column">Here goes something</div>

      <div className="App__column">
        <Calculator />

        <Timer />
      </div>
    </div>
  );
};

export default App;
