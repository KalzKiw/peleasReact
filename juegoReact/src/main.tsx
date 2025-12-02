import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';
import './Game.css';

//Para renderizar todo y poder arrancar mi game 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);