import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import avatar2 from 'mocks/images/avatars/sample-avatar2.jpg';
import { announcementsResponse } from 'mocks/msw/rest-api/announcements/responses/announcementResponse';

const [
  sampleAnnouncement1,
  sampleAnnouncement2,
  sampleAnnouncement3,
  sampleAnnouncement4,
  sampleAnnouncement5,
] = announcementsResponse.announcements;

const sampleBoard1 = {
  id: 0,
  boardName: 'Sobótka',
  announcements: [sampleAnnouncement1, sampleAnnouncement2, sampleAnnouncement3],
  avatar: avatar1,
  author: 'Artur',
  description:
    'Sobótka Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.',
};
const sampleBoard2 = {
  id: 1,
  boardName: 'Chrząszczyżewoszyce',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
  avatar: avatar2,
  description:
    'To drugie description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.',
};

const sampleBoard3 = {
  id: 2,
  boardName: 'Opole',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};
const sampleBoard4 = {
  id: 3,
  icon: avatar1,
  boardName: 'Chrząszczyżewoszyce',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};

const sampleBoard5 = {
  id: 4,
  icon: avatar1,
  boardName: 'Opole',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};
const sampleBoard6 = {
  id: 5,
  icon: avatar1,
  boardName: 'Wrocław',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};
const sampleBoard7 = {
  id: 6,
  icon: avatar1,
  boardName: 'Świdnicka',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};

const sampleBoard8 = {
  id: 7,
  icon: avatar1,
  boardName: 'Świdnicka',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};

export const availableForUserBoardsResponse = {
  boards: [sampleBoard4, sampleBoard5, sampleBoard6, sampleBoard7],
};
export const UserAlreadyAssignedBoardsResponse = { boards: [sampleBoard4, sampleBoard5] };
export const boardsResponse = { boards: [sampleBoard1, sampleBoard2] };
