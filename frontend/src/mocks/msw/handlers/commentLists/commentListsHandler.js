// src/mocks/handlers.js
import { rest } from 'msw';
import { commentListsResponse } from './commentListsResponse';

const getCommentListsHandler = rest.get('/announcements/1/comments', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(commentListsResponse));
});

const postCommentListHandler = rest.post('/announcements/1/comments', (req, res, ctx) => {
  commentListsResponse.commentList.push(req.body);
  return res(ctx.status(200), ctx.json(commentListsResponse));
});

export const commentListHandlers = [getCommentListsHandler, postCommentListHandler];
