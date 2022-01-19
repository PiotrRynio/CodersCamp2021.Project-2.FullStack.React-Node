import { rest } from 'msw';
import { boardsListsResponse } from './boardsListsResponse';

const boardsListsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListsResponse));
});

export default boardsListsHandler;
