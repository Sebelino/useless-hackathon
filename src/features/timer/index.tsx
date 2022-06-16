import { useEffect, useState } from 'react';
import { formatAmount } from '../../utils/formatter';
import { StopButton } from './StopButton';

const onPay = () => {
  alert('Not working');
};

export const Timer = () => {
  const [modeCost] = useState(6);
  const [speedCost] = useState(8);
  const [runningSeconds, setRunningSeconds] = useState(0);
  const [isWashing, setIsWashing] = useState(false);
  const totalAmount = runningSeconds * modeCost * speedCost;

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
