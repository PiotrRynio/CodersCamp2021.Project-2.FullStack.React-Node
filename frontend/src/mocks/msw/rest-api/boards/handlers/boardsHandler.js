import { rest } from 'msw';
import { availableForUserBoardsResponse, boardsResponse } from '../responses/boardsResponse';

const getAllBoardsHandler = rest.get('/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsResponse));
});

const getAnnouncementListResponse = rest.get('/boards/:id/announcements', (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.status(200), ctx.json(boardsResponse.boards[id].announcements));
});
const postAnnouncementListResponse = rest.post('/boards/:id/announcements', (req, res, ctx) => {
  const { id } = req.params;
  boardsResponse.boards[id].announcements.push(req.body);
  return res(ctx.status(200), ctx.json(boardsResponse.boards[id].announcements));
});

const getUserBoards = rest.get('/user/:id/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(boardsResponse));
});

const getBoardHandler = rest.get('/boards/:id', (req, res, ctx) => {
  const { id } = req.params;

  return res(ctx.status(200), ctx.json(boardsResponse.boards[id]));
});

const postBoardsListsHandler = rest.post('/boards', (req, res, ctx) => {
  const { boards } = boardsResponse;
  const newId = boards.length;
  req.body.id = newId;
  boards.push(req.body);

  return res(ctx.status(200), ctx.json(req.body));
});

const getAvailableUserBoards = rest.get('/boards?isNearUser=true', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(availableForUserBoardsResponse));
});

export default [
  getAllBoardsHandler,
  getAnnouncementListResponse,
  postAnnouncementListResponse,
  getAvailableUserBoards,
  getBoardHandler,
  postBoardsListsHandler,
  getUserBoards,
];
