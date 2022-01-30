import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import avatar2 from 'mocks/images/avatars/sample-avatar2.jpg';

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
  id: 0,
  content: 'Great idea!',
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser1,
};

const sampleComment2 = {
  id: 1,
  content: 'Trololo!',
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser2,
};

const sampleComment3 = {
  id: 2,
  content: 'Are you ok?',
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser1,
};

const sampleComment4 = {
  id: 3,
  content: 'Jak wam idzie kodzenie?',
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser1,
};

const sampleComment5 = {
  id: 4,
  content: "Don't like it...",
  createDate: '2021-06-20T15:48:21.000',
  author: sampleUser2,
};

export const commentListsResponse = {
  commentList: [sampleComment1, sampleComment2, sampleComment3, sampleComment4, sampleComment5],
};
