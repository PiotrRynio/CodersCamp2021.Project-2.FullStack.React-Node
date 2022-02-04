import { rest } from 'msw';
import {
  boardsResponse,
  availableForUserBoardsResponse,
  UserAlreadyAssignedBoardsResponse,
} from './boardsResponse';

const getAvailableUserBoards = rest.get('/board?isNearUser=true', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(availableForUserBoardsResponse));
});

const getAlreadyAssignedBoards = rest.get('/user/:id/boards', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(UserAlreadyAssignedBoardsResponse));
});

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
  getAlreadyAssignedBoards,
];
