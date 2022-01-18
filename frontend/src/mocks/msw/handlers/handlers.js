// src/mocks/handlers.js
import { rest } from 'msw';
import { sampleCommentList } from '../../objects/UserCommentList';

export const handlers = [
  rest.get('/commentLists', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sampleCommentList));
  }),
];
