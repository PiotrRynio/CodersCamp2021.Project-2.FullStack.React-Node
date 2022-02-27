import { v4 as uuidv4 } from 'uuid';
import { InMemoryBoardsRepository } from './InMemoryBoards.repository.js';
import { Board } from '../../service/Board.js';

describe('UsersRegistrationRepository |', () => {
  const testBoard = new Board({
    boardName: 'Wroclaw',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
  });
  const testRepository = new InMemoryBoardsRepository();
  const testID = uuidv4();
  testBoard.id = testID;

  test('properly adds new board to repository', () => {
    //WHEN
    testRepository.createNewBoard(testBoard);

    //THEN
    expect(testRepository.entities).hasOwnProperty(testID);
    const addedBoard = testRepository.entities[testID];
    expect(addedBoard).toBe(testBoard);
  });
});
