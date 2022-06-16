import React, { useCallback, useState } from 'react';
import random from 'lodash/random';
import './Controls.css';

const getRandomValue = (value: number) => value * random(1, 5);

enum ControlState {
  Idle = 'IDLE',
  Requested = 'REQUESTED',
}

interface RandomValueControlProps {
  title: string;
  min: number;
  max: number;
  onSubmit: (value: number) => void;
  isSubmitActive?: boolean;
}

const RandomValueControl: React.FC<RandomValueControlProps> = ({
  title,
  min,
  max,
  onSubmit,
  isSubmitActive = true,
}) => {
  const [controlState, setControlState] = useState<ControlState>(ControlState.Idle);
  const [value, setValue] = useState(0);
  const [timerId, setTimerId] = useState<any>(null);

  const isIdle = controlState === ControlState.Idle;
  const isRequested = controlState === ControlState.Requested;

  const onStart = useCallback(() => {
    setControlState(ControlState.Requested);

    const timer = setInterval(() => {
      const randomValue = random(min, max);

      setValue(randomValue);
    }, 100);

    setTimerId(timer);
  }, [max, min]);

  const onStop = useCallback(() => {
    setControlState(ControlState.Idle);

    if (!timerId) return;

    clearTimeout(timerId);
  }, [timerId]);

  const onSubmitHandler = useCallback(() => {
    if (!isSubmitActive) {
      alert('Ooops something really bad happened 🤯');

      return;
    }

    onSubmit(getRandomValue(value));
  }, [onSubmit, value, isSubmitActive]);

  return (
    <div className="RandomValueControl">
      <div className="RandomValueControl__title">{title}</div>

      <div className="RandomValueControl__value">{value}</div>

      <button type="button" className="RandomValueControl__button" onClick={onStart} disabled={isRequested}>
        Start
      </button>
      <button type="button" className="RandomValueControl__button" onClick={onStop} disabled={isIdle}>
        Stop
      </button>
      <button type="button" className="RandomValueControl__button" onClick={onSubmitHandler}>
        Submit
      </button>
    </div>
  );
};

interface ControlsProps {
  onChangeMode: (mode: number) => void;
  onChangeSpeed: (speed: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ onChangeMode, onChangeSpeed }) => {
  return (
    <div className="Controls">
      <div className="Controls__section">
        <RandomValueControl title="Mode" min={1} max={5} onSubmit={onChangeMode} />
      </div>

      <div className="Controls__section">
        <RandomValueControl title="Speed, 🏎️" min={1} max={1000} onSubmit={onChangeSpeed} />
      </div>

      <div className="Controls__section">
        <RandomValueControl
          title="Temperature, 🥵"
          min={-900}
          max={500}
          onSubmit={console.log}
          isSubmitActive={false}
        />
      </div>
    </div>
  );
};

export default Controls;
