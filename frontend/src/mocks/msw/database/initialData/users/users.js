import avatar1 from '../../../../images/avatars/sample-avatar1.jpg';
import avatar2 from '../../../../images/avatars/sample-avatar2.jpg';

const sampleUser1 = {
  id: 1,
  avatarUrl: avatar1,
  firstName: 'Andrzej',
  lastName: 'Nowak',
};

const sampleUser2 = {
  id: 2,
  avatarUrl: avatar2,
  firstName: 'Jan',
  lastName: 'Kowalski',
};

export const users = { collection: [sampleUser1, sampleUser2], itemName: 'user' };
