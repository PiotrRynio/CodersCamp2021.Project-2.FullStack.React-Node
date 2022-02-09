import { rest } from 'msw';
import { BOARDS_PATH, REST_API_URL } from 'constants/restApiPaths';
import { server } from 'mocks/msw/rest-api/server';

export function getRegisteredEventsWillReturn(boardAnnouncementsResponse) {
  server.use(
    rest.get(`${REST_API_URL}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardAnnouncementsResponse));
    }),
  );
}

export function getRegisteredEventsIsLoading() {
  server.use(
    rest.get(`${REST_API_URL}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
}

export function getRegisteredEventsWillReturnFail() {
  server.use(
    rest.get(`${REST_API_URL}${BOARDS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
}
