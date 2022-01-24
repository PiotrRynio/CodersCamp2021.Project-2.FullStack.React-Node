// src/mocks/handlers.js
import { rest } from 'msw';
import { commentListsResponse } from './commentListsResponse';
import { announcementsResponse } from '../announcements/announcementResponse';

const getCommentListsHandler = rest.get('/announcements/:id/comments', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse[id].comments;
  const response = { commentList: comments };

  return res(ctx.status(200), ctx.json(response));
});

const postCommentListHandler = rest.post('/announcements/:id/comments', (req, res, ctx) => {
  const { id } = req.params;
  const comments = announcementsResponse[id].comments;
  comments.push(req.body);
  const response = { commentList: comments };

  return res(ctx.status(200), ctx.json(response));
});

export const commentListHandlers = [getCommentListsHandler, postCommentListHandler];
