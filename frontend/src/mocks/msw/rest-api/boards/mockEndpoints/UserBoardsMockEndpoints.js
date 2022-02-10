import { rest } from 'msw';
import { BOARDS_PATH, USER_PATH, REST_API_URL } from 'constants/restApiPaths';
import { server } from 'mocks/msw/rest-api/server';

export function getUserBoardsWillReturn(boardsResponse) {
  server.use(
    rest.get(`${REST_API_URL}${USER_PATH}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardsResponse));
    }),
  );
}

export function getUserBoardsIsLoading() {
  server.use(
    rest.get(`${REST_API_URL}${USER_PATH}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
}

export function getUserBoardsWillReturnFail() {
  server.use(
    rest.get(`${REST_API_URL}${USER_PATH}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
}
