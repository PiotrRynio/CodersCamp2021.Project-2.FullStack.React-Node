import { agent } from 'supertest';
import { AnnouncementsController } from './Announcements.controller.js';
import { testApi } from '../../../testsUtils/testApi.js';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundError } from '../../../utils/NotFoundError.js';

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

  test('GET /rest-api/borders/:id/announcements | when return board announcements', async () => {
    // GIVEN
    const expectedId = uuidv4();
    const expectedId2 = uuidv4();

    const serviceResponse = [
      {
        ...postAnnouncementRequestBody,
        id: expectedId,
        commentsIds: [],
      },
      {
        ...postAnnouncementRequestBody,
        id: expectedId2,
        commentsIds: [],
      },
    ];

    const expectedResponse = {
      announcements: serviceResponse,
    };
    const testService = {
      findBoardAnnouncements: async () => {
        return serviceResponse;
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).get('/rest-api/boards/1/announcements');

    // THEN
    expect(status).toEqual(200);
    expect(body).toEqual(expectedResponse);
  });

  test('GET /rest-api/borders/:id/announcements | when service throw Error', async () => {
    // GIVEN
    const testService = {
      findBoardAnnouncements: async () => {
        throw new Error('Error message');
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).get(`/rest-api/boards/1/announcements`);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Error message' });
  });

  test('GET /rest-api/announcements/:id | when return announcement', async () => {
    // GIVEN
    const expectedId = uuidv4();
    const expectedResponse = {
      announcement: {
        ...postAnnouncementRequestBody,
        id: expectedId,
        commentsIds: [],
      },
    };
    const testService = {
      findAnnouncement: async () => ({ ...expectedResponse.announcement }),
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).get(`/rest-api/announcements/${expectedId}`);

    // THEN
    expect(status).toEqual(200);
    expect(body).toEqual(expectedResponse);
  });

  test('GET /rest-api/announcements/:id | when service throw Error', async () => {
    // GIVEN
    const testService = {
      findAnnouncement: async () => {
        throw new Error('Error message');
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).get(`/rest-api/announcements/test-id`);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Error message' });
  });

  test('GET /rest-api/announcements/:id | when service throw NotFoundError', async () => {
    // GIVEN
    const testService = {
      findAnnouncement: async () => {
        throw new NotFoundError('Announcement');
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).get(`/rest-api/announcements/test-id2`);

    // THEN
    expect(status).toEqual(404);
    expect(body).toEqual({ message: 'Announcement not found.' });
  });

  test('DELETE /rest-api/announcements/:id | when service return deleted announcement', async () => {
    // GIVEN
    const expectedId = uuidv4();
    const expectedResponse = {
      announcement: {
        ...postAnnouncementRequestBody,
        id: expectedId,
        commentsIds: [],
      },
    };
    const testService = {
      deleteAnnouncement: async () => ({ ...expectedResponse.announcement }),
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).delete(`/rest-api/announcements/${expectedId}`);

    // THEN
    expect(status).toEqual(200);
    expect(body).toEqual(expectedResponse);
  });

  test('DELETE /rest-api/announcements/:id | when service throw NotFoundError', async () => {
    // GIVEN
    const testService = {
      deleteAnnouncement: async () => {
        throw new Error('Error Message');
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).delete(`/rest-api/announcements/test-id2`);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Error Message' });
  });

  test('PATCH /rest-api/announcements/:id | when service return updated announcement', async () => {
    // GIVEN
    const expectedId = uuidv4();
    const expectedResponse = {
      announcement: {
        ...postAnnouncementRequestBody,
        id: expectedId,
        commentsIds: [],
      },
    };
    const testService = {
      updateAnnouncement: async () => ({ ...expectedResponse.announcement }),
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).patch(`/rest-api/announcements/${expectedId}`);

    // THEN
    expect(status).toEqual(200);
    expect(body).toEqual(expectedResponse);
  });

  test('PATCH /rest-api/announcements/:id | when service return error', async () => {
    // GIVEN
    const expectedId = uuidv4();
    const testService = {
      updateAnnouncement: async () => {
        throw new Error('Test error message');
      },
    };
    const announcementsController = new AnnouncementsController(testService);
    const app = testApi('/rest-api', announcementsController.router);

    // WHEN
    const { body, status } = await agent(app, {}).patch(`/rest-api/announcements/${expectedId}`);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Test error message' });
  });
});
