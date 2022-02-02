import { rest } from 'msw';
import { boardsListsResponse } from './boardsListsResponse';

const getBoardsListsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListsResponse));
});

const postBoardsListsHandler = rest.post('/boards', (req, res, ctx) => {
  const { boards } = boardsListsResponse;
  const newId = boards.length;
  req.body.id = newId;
  boards.push(req.body);

  return res(ctx.status(200), ctx.json(req.body));
});

const getBoardHandler = rest.get('/boards/:id', (req, res, ctx) => {
  const { id } = req.params;

  return res(ctx.status(200), ctx.json(boardsListsResponse.boards[id]));
});

export const boardsHandlers = [getBoardsListsHandler, postBoardsListsHandler, getBoardHandler];
