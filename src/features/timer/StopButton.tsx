import { useState } from 'react';
import './StopButton.css';

export const StopButton = ({ onStop }: { onStop: () => void }) => {
  const [hoverCount, setHoverCount] = useState(0);
  const [stopBtnCn, setStopBtnCn] = useState('');

  const onMouseOver = () => {
    if (hoverCount === 0) {
      setStopBtnCn('invisible');
      setHoverCount(1);
      return;
    }

    if (hoverCount === 1) {
      setStopBtnCn('disabled');
      setHoverCount(2);
      return;
    }
  };

  return (
    <button
      className={stopBtnCn}
      id="stop-washing"
      onClick={onStop}
      onMouseOver={onMouseOver}
      onMouseOut={() => setStopBtnCn('')}
    >
      Stop washing
    </button>
  );
};
