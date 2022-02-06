import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/msw/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
//add useless comment
