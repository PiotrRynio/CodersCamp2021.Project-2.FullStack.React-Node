import { v4 as uuidv4 } from 'uuid';
import { InMemoryBoardsRepository } from './InMemoryBoards.repository.js';
import { Board } from '../../service/Board.js';

describe('InMemoryRepository |', () => {
  const testBoard = new Board({
    boardName: 'Wroclaw',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
  });
  const testRepository = new InMemoryBoardsRepository();
  afterEach(() => {
    testRepository.removeAllBoards();
  });

  testBoard.id = uuidv4();

  const testAnnouncementID = uuidv4();

  test('properly adds new board to repository', () => {
    //WHEN
    testRepository.createNewBoard(testBoard);

    //THEN
    expect(testRepository.entities).hasOwnProperty(testBoard.id);
    const addedBoard = testRepository.entities[testBoard.id];
    expect(addedBoard).toBe(testBoard);
  });

  test('properly find added board by name', () => {
    //WHEN
    testRepository.createNewBoard(testBoard);

    const foundBoards = testRepository.findBoardByName(testBoard.boardName);

    //THEN
    expect(foundBoards).toContain(testBoard);
  });
  test(`throw an error when found board by id don't exist`, () => {
    //WHEN
    const tryFindNotExistingBoard = () => {
      testRepository.findBoardByID(testBoard.id);
    };

    //THEN
    expect(tryFindNotExistingBoard).toThrowError();
  });

  test('properly add announcement id to board', () => {
    //WHEN
    testRepository.createNewBoard(testBoard);
    const updatedBoard = testRepository.addNewAnnouncementId(testBoard.id, testAnnouncementID);

    //THEN
    expect(updatedBoard.announcements.includes(testAnnouncementID)).toBeTruthy();
  });
});
