import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');


  // Initialize Firebase
  firebase.initializeApp( {
    apiKey: "AIzaSyDLHn6EQR2TXkUoSeT6eTNJXUvjnDirfbI",
    authDomain: "notes-taking-d5350.firebaseapp.com",
    databaseURL: "https://notes-taking-d5350.firebaseio.com",
    projectId: "notes-taking-d5350",
    storageBucket: "notes-taking-d5350.appspot.com",
    messagingSenderId: "995647022690",
    appId: "1:995647022690:web:b08e3bdba0bd7bab32933b"
  }
  );


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
