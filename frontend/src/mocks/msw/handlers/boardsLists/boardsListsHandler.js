import { rest } from 'msw';
import { boardsListsResponse, userBoards } from './boardsListsResponse';

const boardsListsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListsResponse));
});

const availableUserBoards = rest.get('/boards/isNearUser=true', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListsResponse));
});

const userBoardsHandler = rest.get('/users/:id/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(userBoards));
});

export const boards = [boardsListsHandler, availableUserBoards, userBoardsHandler];
