import { rest } from 'msw';
import { announcementsResponse } from '../announcements/announcementsResponse';

export const commentListsHandler = rest.get('/comments/:id', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse.announcements[id].comments;

  return res(ctx.status(200), ctx.json(comments));
});
