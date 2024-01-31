import React from 'react';
import Counter from '../components/Counter';
import Logo from '../components/Logo';
import Webpack from '../components/Webpack';
import style from './style-home.module.#EXTENSION';

const Home = () => {

    return(
        <div className={style.container}>
        <h1 className={style.h1}>This is My Framework React on Webpack builder</h1>
        <div className={style.container2}>
          <Logo />
          <Webpack/>
        </div>
          <Counter/>
      </div>
    );
};

export default Home;
