import { agent } from 'supertest';
import { testApi } from '../../../testUtils/testApi.js';
import { BoardsController } from './BoardsController.js';

describe('Boards controller |', () => {
  const testBoardBody = {
    boardName: 'Wroclaw',
    coords: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description',
    avatarUrl: 'https://firebasestorage.googleapis.com/sampleavatarurl',
    announcements: [],
  };

  test('POST /rest-api/boards | when return added new board body', async () => {
    // GIVEN
    const testService = {
      addBoard: async (boardBody) => boardBody,
    };
    const boardsController = new BoardsController(testService);
    const app = testApi('/rest-api', boardsController.router);

    // WHEN
    const { body, status } = await agent(app).post('/rest-api/boards').send(testBoardBody);

    // THEN
    expect(status).toEqual(200);
    expect(body.returnedData.boardName).toEqual(testBoardBody.boardName);
    expect(body.returnedData.mapCoordinates).toEqual(testBoardBody.mapCoordinates);
    expect(body.returnedData.accessType).toEqual(testBoardBody.accessType);
    expect(body.returnedData.adminId).toEqual(testBoardBody.adminId);
    expect(body.returnedData.description).toEqual(testBoardBody.description);
  });

  test('POST /rest-api/boards/ | when service thrown an error', async () => {
    // GIVEN
    const testService = {
      addBoard: async () => {
        throw new Error('Sample error message');
      },
    };
    const boardsController = new BoardsController(testService);
    const app = testApi('/rest-api', boardsController.router);

    // WHEN
    const { body, status } = await agent(app).post('/rest-api/boards').send(testBoardBody);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Sample error message' });
  });
  test('PATCH /rest-api/boards/:id | when return board with added announcement', async () => {
    // GIVEN
    const testAnnouncementID = '622a38a4e30a4ba39ee75a40';
    const testBoardID = '622a38b8e7cfef8c44142cd9';
    testBoardBody.id = testBoardID;
    testBoardBody.announcements.push(testAnnouncementID);
    const testService = {
      addNewAnnouncement: async (testBoardID, testAnnouncementID) => testBoardBody,
    };
    const boardsController = new BoardsController(testService);
    const app = testApi('/rest-api', boardsController.router);

    // WHEN
    const { body, status } = await agent(app).patch(`/rest-api/boards/${testBoardID}`);

    // THEN
    expect(status).toEqual(200);
    expect(body.returnedData).toEqual(testBoardBody);
  });

  test('PATCH /rest-api/boards/:id | when service thrown an error', async () => {
    // GIVEN
    const testAnnouncementID = '622a38a4e30a4ba39ee75a40';
    const testBoardID = '622a38b8e7cfef8c44142cd9';
    testBoardBody.id = testBoardID;
    testBoardBody.announcements.push(testAnnouncementID);
    const testService = {
      addNewAnnouncement: async () => {
        throw new Error('Sample error message');
      },
    };
    const boardsController = new BoardsController(testService);
    const app = testApi('/rest-api', boardsController.router);

    // WHEN
    const { body, status } = await agent(app).patch(`/rest-api/boards/${testBoardID}`);

    // THEN
    expect(status).toEqual(400);
    expect(body).toEqual({ message: 'Sample error message' });
  });
});
