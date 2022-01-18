import avatar1 from '../../../images/avatars/sample-avatar1.jpg';
import avatar2 from '../../../images/avatars/sample-avatar2.jpg';

const sampleUser1 = {
  userId: 1,
  avatarUrl: avatar1,
  firstName: 'Andrzej',
  lastName: 'Nowak',
};

const sampleUser2 = {
  userId: 2,
  avatarUrl: avatar2,
  firstName: 'Jan',
  lastName: 'Kowalski',
};

const sampleComment1 = {
  commentId: 1,
  content: 'Great idea!',
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser1,
};

const sampleComment2 = {
  commentId: 2,
  content: "Don't like it...",
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser2,
};

export const commentListsResponse = {};
