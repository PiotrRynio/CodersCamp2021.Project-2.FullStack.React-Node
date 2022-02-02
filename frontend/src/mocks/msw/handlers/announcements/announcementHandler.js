import { rest } from 'msw';
import { announcementsResponse } from './announcementResponse';

const announcementsHandler = rest.get('/announcements/:id', (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.status(200), ctx.json(announcementsResponse.announcements[id]));
});

export default announcementsHandler;
