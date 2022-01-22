// src/mocks/handlers.js
import { rest } from 'msw';
import { commentListsResponse } from './commentListsResponse';

export const commentListsHandler = rest.get('/commentLists', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(commentListsResponse));
});

export const postCommentListHandler = rest.post('/commentLists', (req, res, ctx) => {
  commentListsResponse.commentList.push(req.body);
  return res(ctx.status(200), ctx.json(commentListsResponse));
});
