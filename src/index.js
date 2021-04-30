import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app/App';
import { Music } from './common/song/song-module';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Music></Music>
  </React.StrictMode>,
  document.getElementById('root')
);