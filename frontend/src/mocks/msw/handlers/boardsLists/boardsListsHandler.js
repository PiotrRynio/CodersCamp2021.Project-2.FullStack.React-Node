import { rest } from 'msw';
import { boardsListResponse } from './BoardsListResponse';

const getAllBoardsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListResponse));
});

const getAvailableUserBoards = rest.get('/user/1/boards/changeable', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListResponse));
});

export default [getAllBoardsHandler, getAvailableUserBoards];
