import React, { useState } from 'react';
import style from './style-counter.module.#EXTENSION';

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <div className={style.addless}>
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <button type='input'>{counter}</button>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </div>
  );
};

export default Counter;