import { announcementsResponse } from 'mocks/msw/handlers/announcements/announcementResponse';

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
  boardIcon: 'city',
  announcements: [sampleAnnouncement1, sampleAnnouncement2, sampleAnnouncement3],
  author: 'Artur',
};
const sampleBoard2 = {
  id: 1,
  boardName: 'Chrząszczyżewoszyce',
  boardIcon: '',
  announcements: [sampleAnnouncement4, sampleAnnouncement5],
  author: 'Krzysztof',
};

export const boardsResponse = { boards: [sampleBoard1, sampleBoard2] };
