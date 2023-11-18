import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'macro-css';
import {BrowserRouter, Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router location="/" navigator="/">
          <App />
      </Router>



  </React.StrictMode>
);

