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

export const boardsHandlers = [getBoardsListsHandler, postBoardsListsHandler];
