import { rest } from 'msw';
import { boardsListsResponse } from './boardsListsResponse';

const boardsListsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListsResponse));
});

const postBoardsListsHandler = rest.post('/boards', (req, res, ctx) => {
  const { boards } = boardsListsResponse;
  boards.push(req.body);

  return res(ctx.status(200), ctx.json(boardsListsResponse));
});

export const boardsHandlers = [boardsListsHandler, postBoardsListsHandler];
