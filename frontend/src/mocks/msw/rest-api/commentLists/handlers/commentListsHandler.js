import { rest } from 'msw';
import { announcementsResponse } from 'mocks/msw/rest-api/announcements/responses/announcementResponse';

const getCommentListsHandler = rest.get('/announcements/:id/comments', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse.announcements[id].comments;
  const response = { commentList: comments };

  return res(ctx.status(200), ctx.json(response));
});

const postCommentListHandler = rest.post('/announcements/:id/comments', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse.announcements[id].comments;
  comments.push(req.body);
  const response = { commentList: comments };

  return res(ctx.status(200), ctx.json(response));
});

export const commentListHandlers = [getCommentListsHandler, postCommentListHandler];
