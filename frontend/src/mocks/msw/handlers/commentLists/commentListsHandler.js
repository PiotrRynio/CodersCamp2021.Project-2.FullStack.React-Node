// src/mocks/handlers.js
import { rest } from 'msw';
import { commentListsResponse } from './commentListsResponse';
import { mockDatabase } from '../../database/mockDatabase';
// import { commentsDatabase } from '../../database/comments/commentsDatabase';

export const commentListsHandler = rest.get('/comments', (req, res, ctx) => {
  const data = mockDatabase.comment.getAll();
  return res(ctx.status(200), ctx.json(data));
});
