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

  const testBoard4 = new Board({
    boardName: 'SampleBoardName3',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description 1',
    avatarUrl: 'https://firebasestorage.googleapis.com/samplenewatarurl',
    announcements: [],
    id: uuidv4(),
  });

  const testAnnouncementID1 = uuidv4();
  const testAnnouncementID2 = uuidv4();
  const testAnnouncementID3 = uuidv4();

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

  test('properly add announcement id to board', async () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    testRepository.createNewBoard(testBoard1);
    await testRepository.addNewAnnouncementId(testBoard1.id, testAnnouncementID1);
    await testRepository.addNewAnnouncementId(testBoard1.id, testAnnouncementID2);
    const updatedBoard = await testRepository.addNewAnnouncementId(
      testBoard1.id,
      testAnnouncementID3,
    );

    //THEN
    expect(updatedBoard.announcements.includes(testAnnouncementID1)).toBeTruthy();
    expect(updatedBoard.announcements.length === 3).toBeTruthy();
  });

  test('when try add announcements without board id, then error is thrown', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    const tryToAddAnnouncementWithoutBoardID = async () => {
      await testRepository.addNewAnnouncementId(undefined, testAnnouncementID1);
    };

    //THEN
    expect(tryToAddAnnouncementWithoutBoardID).rejects.toThrowError('No board ID!');
  });

  test('when try add announcements without announcement id, then error is thrown', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    const tryToAddAnnouncementWithoutAnnouncementId = async () => {
      await testRepository.addNewAnnouncementId(testBoard1, undefined);
    };

    //THEN
    expect(tryToAddAnnouncementWithoutAnnouncementId).rejects.toThrowError('No announcement ID!');
  });

  test('properly delete an announcement', async () => {
    //GIVEN
    function randomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    testRepository.createNewBoard(testBoard4);
    const announcementsIDsToAdd = Array(randomValue(2, 10)).fill(uuidv4());
    for (const announcementID of announcementsIDsToAdd) {
      await testRepository.addNewAnnouncementId(testBoard4.id, announcementID);
    }
    const updatedBoard = await testRepository.deleteBoardAnnouncement(announcementsIDsToAdd[0]);

    //THEN
    expect(updatedBoard.announcements.length == announcementsIDsToAdd.length - 1).toBeTruthy();
  });
  test('when try delete announcements without announcement id, then error is thrown', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    const tryToDeleteAnnouncementWithoutAnnouncementId = async () => {
      await testRepository.addNewAnnouncementId(testBoard1, undefined);
    };

    //THEN
    expect(tryToDeleteAnnouncementWithoutAnnouncementId).rejects.toThrowError(
      'No announcement ID!',
    );
  });
  test('when try delete announcements that not exist, then error is thrown', () => {
    //GIVEN
    const testRepository = new InMemoryBoardsRepository();

    //WHEN
    const tryToDeleteAnnouncementThatNotExist = async () => {
      await testRepository.deleteBoardAnnouncement(testAnnouncementID1);
    };

    //THEN
    expect(tryToDeleteAnnouncementThatNotExist).rejects.toThrowError(
      'Not found specified announcement id',
    );
  });
});
