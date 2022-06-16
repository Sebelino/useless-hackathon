import React, { useCallback, useState } from 'react';
import random from 'lodash/random';
import './Controls.css';

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

    onSubmit(value);
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

interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value }) => {
  return (
    <label className="RadioButton">
      <input type="radio" name={name} value={value} />
      {label}
    </label>
  );
};

const Controls = () => {
  return (
    <div className="Controls">
      <div className="Controls__section">
        <RandomValueControl title="Mode" min={1} max={5} onSubmit={console.log} />
      </div>

      <div className="Controls__section">
        <RandomValueControl title="Speed" min={1} max={1000} onSubmit={console.log} isSubmitActive={false} />
      </div>
    </div>
  );
};

export default Controls;
