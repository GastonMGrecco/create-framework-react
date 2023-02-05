import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const element = ReactDOM.createRoot(document.getElementById('root'));

element.render(
  <StrictMode>
      <App />
  </StrictMode>
);
