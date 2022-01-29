import { rest } from 'msw';
import { boardsListResponse } from './BoardsListResponse';

const getAllBoardsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsListResponse));
});

const getAvailableUserBoards = rest.get(
  '/users/1/boards?isPostAddingAllowed=true',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(boardsListResponse));
  },
);

export default [getAllBoardsHandler, getAvailableUserBoards];
