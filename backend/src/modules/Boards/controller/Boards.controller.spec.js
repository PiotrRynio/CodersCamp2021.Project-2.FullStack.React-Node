import { agent } from 'supertest';
import { testApi } from '../../../testUtils/testApi.js';
import { BoardsController } from './BoardsController.js';

describe('Boards controller |', () => {
  const boardBody = {
    boardName: 'Wroclaw',
    coords: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description',
    avatarUrl: 'https://firebasestorage.googleapis.com/sampleavatarurl',
  };

  test('POST /rest-api/boards | when return added body', async () => {
    // GIVEN
    const testService = {
      addBoard: async (boardBody) => boardBody,
    };
    const boardsController = new BoardsController(testService);
    const app = testApi('/rest-api', boardsController.router);

    // WHEN
    const { body, status } = await agent(app).post('/rest-api/boards').send(boardBody);

    // THEN
    expect(status).toEqual(200);
    expect(body.returnedData.boardName).toEqual(boardBody.boardName);
    expect(body.returnedData.mapCoordinates).toEqual(boardBody.mapCoordinates);
    expect(body.returnedData.accessType).toEqual(boardBody.accessType);
    expect(body.returnedData.adminId).toEqual(boardBody.adminId);
    expect(body.returnedData.description).toEqual(boardBody.description);
  });
});
