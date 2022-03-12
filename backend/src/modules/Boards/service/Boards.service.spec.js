import { InMemoryBoardsRepository } from '../repository/inMemory/InMemoryBoards.repository.js';
import { Board } from './Board.js';
import { BoardsService } from './Boards.service.js';

describe('Board service | add new board', () => {
  const testBoard = new Board({
    boardName: 'Wroclaw',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description',
    avatarUrl: 'https://firebasestorage.googleapis.com/sampleavatarurl',
    announcements: [],
  });
  const testBoardWithoutContent = new Board({});
  //Given
  const inMemoryBoardsRepository = new InMemoryBoardsRepository();
  const boardsService = new BoardsService(inMemoryBoardsRepository);

  afterEach(() => {
    boardsService.removeAllBoards();
  });

  test('when correct board is being added, then body is returned', async () => {
    //When
    const returnedBody = await boardsService.addBoard(testBoard);

    //Then
    expect(returnedBody).toEqual(testBoard);
  });

  test('when board data is empty, then error is throw', async () => {
    //When
    const addBoardWithoutContent = async () => {
      await boardsService.addBoard(testBoardWithoutContent);
    };

    //Then
    await expect(addBoardWithoutContent).rejects.toThrowError();
  });

  test('when a board with the same name exist too near, error is thrown', async () => {
    //Given
    const boardWithTheSameName = new Board({
      boardName: 'Wroclaw',
      mapCoordinates: {
        latitude: 51.88569995139321,
        longitude: 17.02390643626451,
      },
      accessType: 'private',
      adminId: '507f191e810c19729de860fa',
      description: 'another sample description',
      avatarUrl: 'https://firebasestorage.googleapis.com/samplenewatarurl',
    });

    //When
    await boardsService.addBoard(testBoard);
    const addBoardWithExistingSameTooNear = async () => {
      await boardsService.addBoard(boardWithTheSameName);
    };

    //Then
    await expect(addBoardWithExistingSameTooNear).rejects.toThrowError();
  });
});

describe('Boards service | add new annoucements', () => {
  const testAnnouncementID = '622a38a4e30a4ba39ee75a40';
  const testBoardID = '622a38b8e7cfef8c44142cd9';
  const inMemoryBoardsRepository = new InMemoryBoardsRepository();
  const boardsService = new BoardsService(inMemoryBoardsRepository);
  const testBoard = new Board({
    boardName: 'Wroclaw',
    mapCoordinates: { latitude: 51.88569995139321, longitude: 17.02390643626451 },
    accessType: 'public',
    adminId: '507f191e810c19729de860ea',
    description: 'sample description',
    avatarUrl: 'https://firebasestorage.googleapis.com/sampleavatarurl',
    announcements: [],
  });

  beforeEach(() => {
    boardsService.removeAllBoards();
    testBoard.announcements = [];
  });

  test('when no data are sent then error is thrown', async () => {
    //When
    const addWithoutParameters = async () => {
      await boardsService.addNewAnnouncement();
    };

    //Then
    await expect(addWithoutParameters).rejects.toThrowError();
  });

  test('when board with asked ID is not exist then error is thrown', () => {
    //When
    const tryAddAnnouncementToNotExistBoard = async () => {
      await boardsService.addNewAnnouncement(testBoardID, testAnnouncementID);
    };

    //Then
    expect(tryAddAnnouncementToNotExistBoard).rejects.toThrowError();
  });
  test('when board already contains announcement with specified id then error is thrown', async () => {
    //Given
    const addedBoard = await boardsService.addBoard(testBoard);
    await boardsService.addNewAnnouncement(addedBoard.id, testAnnouncementID);

    //When
    const tryToBoardExistingAnnouncement = async () => {
      await boardsService.addNewAnnouncement(addedBoard.id, testAnnouncementID);
    };

    //Then
    await expect(tryToBoardExistingAnnouncement).rejects.toThrowError();
  });
  test('when correct announcement is being added to board, then updated board body is returned', async () => {
    //Given
    const addedBoard = await boardsService.addBoard(testBoard);
    //When
    const updatedBoard = await boardsService.addNewAnnouncement(addedBoard.id, testAnnouncementID);
    expect(updatedBoard.announcements.includes(testAnnouncementID)).toBeTruthy();
  });
});
