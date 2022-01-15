import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import { UserComment } from './view/UserComment/UserComment';

const sampleUser = {
  userId: 1,
  avatarUrl: '',
  firstName: 'Andrzej',
  lastName: 'Nowak',
};
const sampleComment = {
  commentId: 1,
  content: 'Great idea!',
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UserComment commentObject={sampleComment} />
  </React.StrictMode>,
  document.getElementById('root'),
);
