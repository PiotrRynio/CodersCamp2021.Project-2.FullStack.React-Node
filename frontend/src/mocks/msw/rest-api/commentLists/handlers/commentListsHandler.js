import { rest } from 'msw';
import { announcementsResponse } from 'mocks/msw/rest-api/announcements/responses/announcementResponse';
import { v4 as uuidv4 } from 'uuid';

const getCommentListsHandler = rest.get('/announcements/:id/comments', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse.announcements[id].comments;
  const response = { commentList: comments };

  return res(ctx.status(200), ctx.json(response));
});

const postCommentListHandler = rest.post('/announcements/:id/comments', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse.announcements[id].comments;
  const newComment = { ...req.body, id: uuidv4() };
  comments.push(newComment);
  const response = { commentList: comments };

  return res(ctx.status(200), ctx.json(response));
});

export const commentListHandlers = [getCommentListsHandler, postCommentListHandler];
