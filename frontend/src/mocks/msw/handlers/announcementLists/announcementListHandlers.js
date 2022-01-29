import { rest } from 'msw';
import { announcementListResponse } from './announcementListResponse';

const getAnnounceCementListResponse = rest.get('/boards/1/announcements', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(announcementListResponse));
});

const postAnnounceCementListResponse = rest.post('/boards/1/announcements', (req, res, ctx) => {
  announcementListResponse.announcementList.push(req.body);
  return res(ctx.status(200), ctx.json(announcementListResponse));
});

export const announcementListHandler = [
  getAnnounceCementListResponse,
  postAnnounceCementListResponse,
];
