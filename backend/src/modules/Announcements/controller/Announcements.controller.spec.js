import { agent } from 'supertest';
import { AnnouncementsController } from './Announcements.controller.js';
import { testApi } from '../../../testsUtils/testApi.js';
import { v4 as uuidv4 } from 'uuid';

describe('AnnouncementsController |', () => {
  const postAnnouncementRequestBody = {
    title: 'Brak wody',
    boardName: 'Sobótka',
    content: 'Nie będzie wody tego i tego dnia, tra la la.',
    date: Date.now(),
  };

  test('POST /rest-api/borders/:id/announcements | when return boardsAnnouncements with new Announcements', async () => {
    // GIVEN
    const expectedId = uuidv4();
    const expectedResponse = {
      announcements: [
        {
          ...postAnnouncementRequestBody,
          id: expectedId,
          commentsIds: [],
        },
      ],
    };
    const testService = {
      addAnnouncement: async (postAnnouncementRequestBody) => {
        postAnnouncementRequestBody.id = expectedId;
        postAnnouncementRequestBody.commentsIds = [];
        return [postAnnouncementRequestBody];
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {})
      .post('/rest-api/boards/1/announcements')
      .send(postAnnouncementRequestBody);

    // THEN
    expect(status).toEqual(200);
    expect(body).toEqual(expectedResponse);
  });

  test('POST /rest-api/borders/:id/announcements | when service throw Error', async () => {
    // GIVEN
    const testService = {
      addAnnouncement: async () => {
        throw new Error('Error message');
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {})
      .post('/rest-api/boards/1/announcements')
      .send(postAnnouncementRequestBody);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Error message' });
  });
});
