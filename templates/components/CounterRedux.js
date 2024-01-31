import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counter/counterSlice';
import style from './style-counter.module.#EXTENSION';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.buttons}>
      <div className={style.addless}>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button type='input'>{counter}</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
};

export default Counter;