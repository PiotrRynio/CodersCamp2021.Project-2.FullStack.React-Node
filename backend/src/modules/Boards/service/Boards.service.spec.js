import { InMemoryBoardsRepository } from '../repository/inMemory/InMemoryBoards.repository.js';
import { Board } from './Board.js';
import { BoardsService } from './Boards.service.js';

describe('UsersRegistrationRepository |', () => {
  const testBoard = new Board({
    boardName: 'Wroclaw',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
  });
  const testBoardWithoutContent = new Board({});

  test('when correct board is being added, then body is returned', async () => {
    //Given
    const inMemoryBoardsRepository = new InMemoryBoardsRepository();
    const boardsService = new BoardsService(inMemoryBoardsRepository);

    //When
    const returnedBody = await boardsService.addBoard(testBoard);

    //Then
    expect(returnedBody).toEqual(testBoard);
  });

  test('when board data is not valid, then error is throw', async () => {
    //Given
    const inMemoryBoardsRepository = new InMemoryBoardsRepository();
    const boardsService = new BoardsService(inMemoryBoardsRepository);

    //When
    const addBoardWithoutContent = async () => {
      await boardsService.addBoard(testBoardWithoutContent);
    };

    //Then
    await expect(addBoardWithoutContent).rejects.toThrowError();
  });
});
