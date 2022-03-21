import { rest } from 'msw';
import { BOARD_ANNOUNCEMENTS_PATH, BOARDS_PATH, REST_API_URL } from 'constants/restApiPaths';
import { server } from 'mocks/msw/rest-api/server';

export function getBoardsWillReturn(boardsResponse) {
  server.use(
    rest.get(`${REST_API_URL}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardsResponse));
    }),
  );
}

export function getBoardsIsLoading() {
  server.use(
    rest.get(`${REST_API_URL}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
}

export function getBoardsWillReturnFail() {
  server.use(
    rest.get(`/boards`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
}

export function getBoardsAnnouncementsWillReturn(announcements) {
  server.use(
    rest.get(`${REST_API_URL}${BOARD_ANNOUNCEMENTS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(announcements));
    }),
  );
}
