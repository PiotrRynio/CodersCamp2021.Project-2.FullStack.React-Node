import { rest } from 'msw';
import { boardsResponse } from './boardsResponse';

const getAllBoardsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsResponse));
});

const getAnnouncementListResponse = rest.get('/boards/:id/announcements', (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.status(200), ctx.json(boardsResponse.boards[id].announcements));
});
const postAnnouncementListResponse = rest.post('/boards/:id/announcements', (req, res, ctx) => {
  const { id } = req.params;
  boardsResponse[id].announcements.push(req.body);
  return res(ctx.status(200), ctx.json(boardsResponse.boards[id].announcements));
});

const getAvailableUserBoards = rest.get(
  '/users/1/boards?isPostAddingAllowed=true',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(boardsResponse));
  },
);

const getBoardHandler = rest.get('/boards/:id', (req, res, ctx) => {
  const { id } = req.params;

  return res(ctx.status(200), ctx.json(boardsResponse.boards[id]));
});

export default [
  getAllBoardsHandler,
  getAnnouncementListResponse,
  postAnnouncementListResponse,
  getAvailableUserBoards,
  getBoardHandler,
];
