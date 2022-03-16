import { v4 as uuidv4 } from 'uuid';
import { InMemoryBoardsRepository } from './InMemoryBoards.repository.js';
import { Board } from '../../service/Board.js';

describe('InMemoryRepository |', () => {
  const testBoard1 = new Board({
    boardName: 'SampleBoardName1',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description 1',
    avatarUrl: 'https://firebasestorage.googleapis.com/samplenewatarurl',
    announcements: [],
    id: uuidv4(),
  });

  const testBoard2 = new Board({
    boardName: testBoard1.boardName,
    mapCoordinates: { latitude: 49.88569995139321, longitude: 20.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description 1',
    avatarUrl: 'https://firebasestorage.googleapis.com/samplenewatarurl',
    announcements: [],
    id: uuidv4(),
  });

  const testBoard3 = new Board({
    boardName: 'SampleBoardName3',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description 1',
    avatarUrl: 'https://firebasestorage.googleapis.com/samplenewatarurl',
    announcements: [],
    id: uuidv4(),
  });

  const testAnnouncementID = uuidv4();

  test('properly adds new board to repository', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    testRepository.createNewBoard(testBoard1);

    //THEN
    expect(testRepository.entities).hasOwnProperty(testBoard1.id);
    const addedBoard = testRepository.entities[testBoard1.id];
    expect(addedBoard).toBe(testBoard1);
  });

  test('properly find added board by name', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    testRepository.createNewBoard(testBoard1);
    testRepository.createNewBoard(testBoard2);
    testRepository.createNewBoard(testBoard3);

    const foundBoards = testRepository.findBoardByName(testBoard1.boardName);

    //THEN
    expect(foundBoards).toContain(testBoard1);
  });
  test(`throw an error when found board by id don't exist`, () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    const tryFindNotExistingBoard = () => {
      testRepository.findBoardByID(testBoard1.id);
    };

    //THEN
    expect(tryFindNotExistingBoard).toThrowError();
  });

  test('properly add announcement id to board', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    testRepository.createNewBoard(testBoard1);
    const updatedBoard = testRepository.addNewAnnouncementId(testBoard1.id, testAnnouncementID);

    //THEN
    expect(updatedBoard.announcements.includes(testAnnouncementID)).toBeTruthy();
  });
});
