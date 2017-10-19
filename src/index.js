import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { observe } from './chess-board/Game'

const rootEl = document.getElementById('root');

observe(knightPosition =>
	ReactDOM.render(<App knightPosition={knightPosition} />, rootEl)
)
registerServiceWorker();
