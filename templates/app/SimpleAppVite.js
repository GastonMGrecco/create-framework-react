import React from 'react';
import Counter from './components/Counter';
import Logo from './components/Logo';
import Vite from './components/Vite';
import style from './style.module.css';

const App = () => {

    return(
        <div className={style.container}>
        <h1 className={style.h1}>This is My Framework React on Vite builder</h1>
        <div className={style.container2}>
          <Logo />
          <Vite />
        </div>
          <Counter/>
      </div>
    );
};

export default App;
