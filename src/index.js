import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase, firebaseConfig } from './firebase';
import './index.css';

ReactDOM.render(
  <firebaseConfig.Provider value={new firebase()}>
    <App />
  </firebaseConfig.Provider>,
  document.getElementById('root')
);
