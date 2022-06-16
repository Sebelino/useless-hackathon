import React, { useCallback, useState } from 'react';
import './App.css';
import Controls from './Controls';
import { Calculator } from './features/calculator';
import { Timer } from './features/timer';
import Machine from './Machine';

enum AppState {
  Idle = 'IDLE',
  Spinning = 'SPINNING',
}

const App = () => {
  const [appState, setAppState] = useState(AppState.Idle);
  const [mode, setMode] = useState(0);
  const [speed, setSpeed] = useState(0);

  const onStart = useCallback(() => setAppState(AppState.Spinning), []);
  const onStop = useCallback(() => setAppState(AppState.Idle), []);

  const isSpinning = appState === AppState.Spinning;

  return (
    <div className="App">
      <div className="App__column">
        <Controls onChangeMode={setMode} onChangeSpeed={setSpeed} />
      </div>

      <div className="App__column">
        <Machine isSpinning={isSpinning} />
      </div>

      <div className="App__column">
        <Calculator mode={mode} speed={speed} />

        <Timer mode={mode} speed={speed} onStart={onStart} onStop={onStop} />
      </div>
    </div>
  );
};

export default App;
