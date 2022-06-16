import React, { useCallback, useEffect, useState } from 'react';
import { formatAmount } from '../../utils/formatter';
import { StopButton } from './StopButton';

const onPay = () => {
  alert('Not working');
};

interface TimerProps {
  mode: number;
  speed: number;
  onStart: () => void;
  onStop: () => void;
}

export const Timer: React.FC<TimerProps> = ({ mode, speed, onStart, onStop }) => {
  const [modeCost, setModeCost] = useState(mode);
  const [speedCost, setSpeedCost] = useState(speed);
  const [runningSeconds, setRunningSeconds] = useState(0);
  const [isWashing, setIsWashing] = useState(false);
  const totalAmount = runningSeconds * modeCost * speedCost;

  const onWash = useCallback(() => {
    setIsWashing(true);

    onStart();
  }, [onStart]);

  const onStopWash = useCallback(() => {
    setIsWashing(false);

    onStop();
  }, [onStop]);

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
        <button onClick={onWash}>Start washing!</button>
      ) : (
        <div>
          <p>Wait while we wash your shit! 🕒</p>
          <StopButton onStop={onStopWash} />
        </div>
      )}

      <button onClick={onPay}>Pay ${formatAmount(totalAmount)}</button>
    </section>
  );
};
