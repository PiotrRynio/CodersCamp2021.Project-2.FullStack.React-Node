import { rest } from 'msw';
import { BOARDS_PATH, REST_API_URL } from 'constants/restApiPaths';
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
