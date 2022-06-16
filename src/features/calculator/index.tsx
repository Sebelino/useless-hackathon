import { KeyboardEvent, useState } from 'react';
import { formatAmount } from '../../utils/formatter';

const onKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
  if (evt.key.startsWith('Arrow')) {
    return;
  }

  evt.preventDefault();
  alert("Don't be lazy, put in those numbers! 💪");
};

export const Calculator = () => {
  const [time, setTime] = useState(0);
  const [modeCost] = useState(6);
  const [speedCost] = useState(8);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '.5rem',
      }}
    >
      <label>Speed cost: {formatAmount(modeCost)}</label>

      <label>Mode cost: {formatAmount(speedCost)}</label>

      <label>
        For how many seconds do you plan to run it?
        <input
          onChange={(evt) => setTime(parseInt(evt.target.value, 10))}
          onKeyDown={onKeyDown}
          placeholder="In seconds because life is too short"
          value={time}
          type="number"
        />
      </label>
    </section>
  );
};
