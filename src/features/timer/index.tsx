import React, { useEffect, useState } from 'react';
import { formatAmount } from '../../utils/formatter';
import { StopButton } from './StopButton';

const onPay = () => {
  alert('Not working');
};

interface TimerProps {
  mode: number;
  speed: number;
}

export const Timer: React.FC<TimerProps> = ({ mode, speed }) => {
  const [modeCost, setModeCost] = useState(mode);
  const [speedCost, setSpeedCost] = useState(speed);
  const [runningSeconds, setRunningSeconds] = useState(0);
  const [isWashing, setIsWashing] = useState(false);
  const totalAmount = runningSeconds * modeCost * speedCost;

  useEffect(() => {
    setModeCost(mode);
  }, [mode]);

  useEffect(() => {
    setSpeedCost(speed);
  }, [speed]);

  useEffect(() => {
    if (!isWashing) {
      return;
    }

    const intervalId = setInterval(() => {
      setRunningSeconds((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isWashing]);

  return (
    <section>
      {!isWashing ? (
        <button onClick={() => setIsWashing(true)}>Start washing!</button>
      ) : (
        <div>
          <p>Wait while we wash your shit! 🕒</p>
          <StopButton onStop={() => setIsWashing(false)} />
        </div>
      )}

      <button onClick={onPay}>Pay ${formatAmount(totalAmount)}</button>
    </section>
  );
};
