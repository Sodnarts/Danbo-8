import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Music } from './common/song/song-module';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Music />
  </React.StrictMode>,
  document.getElementById('root')
);