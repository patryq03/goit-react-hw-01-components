import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-01-components/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);