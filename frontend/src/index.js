import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/App';
import { BrowserRouter } from 'react-router-dom';

if (process.env.REACT_APP_IS_MOCK_BACKEND_SERVER === 'true') {
  const { worker } = require('./mocks/msw/rest-api/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
