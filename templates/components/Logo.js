import React from 'react';
import react from '../assets/react.svg';
import style from './style-react.module.#EXTENSION';

const Logo = () => {

  return (
      <img className={style.AppLogo} src={react} alt='logo-react' />
  );
};

export default Logo;
