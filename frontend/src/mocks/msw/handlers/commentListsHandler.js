// src/mocks/handlers.js
import { rest } from 'msw';
import { commentListsResponse } from '../responses/commentListsResponse';

export const commentListsHandler = rest.get('/commentLists', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(commentListsResponse));
});
