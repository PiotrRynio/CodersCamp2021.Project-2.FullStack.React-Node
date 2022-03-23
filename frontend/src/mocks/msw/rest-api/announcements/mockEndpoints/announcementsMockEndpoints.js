import { rest } from 'msw';
import { ANNOUNCEMENTS_PATH, REST_API_URL } from 'constants/restApiPaths';
import { server } from 'mocks/msw/rest-api/server';

export function getAnnouncementWillReturn(announcementResponse) {
  server.use(
    rest.get(`${REST_API_URL}${ANNOUNCEMENTS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(announcementResponse));
    }),
  );
}

export function getAnnouncementIsLoading() {
  server.use(
    rest.get(`${REST_API_URL}${ANNOUNCEMENTS_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
}

export function getAnnouncementWillReturnFail() {
  server.use(
    rest.get(`${REST_API_URL}${ANNOUNCEMENTS_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
}
