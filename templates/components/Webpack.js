import React from 'react';
import style from './style-webpack.module.#EXTENSION';

const Webpack = () => {
  return (
        <div className={style.containerCubo}>
          <div className={style.cube}>
            <div className={style.cube_inner}>
              <div className={style.front}></div>
              <div className={style.back}></div>
              <div className={style.left}></div>
              <div className={style.right}></div>
              <div className={style.top}></div>
              <div className={style.bottom}></div>
            </div>
            <div className={style.cube_outer}>
              <div className={style.front}></div>
              <div className={style.back}></div>
              <div className={style.left}></div>
              <div className={style.right}></div>
              <div className={style.top}></div>
              <div className={style.bottom}></div>
            </div>
          </div>
        </div>
  );
};

export default Webpack;