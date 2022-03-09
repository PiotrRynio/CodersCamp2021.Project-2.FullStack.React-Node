import validateBoard from './validateBoard.js';
import { getDistanceFromCoordinatesInKilometers } from './getDistanceFromCoordinatesInKilometers.js';
import { ADMISSIBLE_DISTANCE_BETWEEN_SAME_NAMES_BOARDS } from '../../../constans/values.js';
import validateAddingAnnouncement from './validateAddingAnnouncement.js';

export class BoardsService {
  constructor(repository) {
    this.repository = repository;
  }

  async addBoard(newBoard) {
    const { error } = validateBoard(newBoard);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const foundBoardsWithSameName = await this.repository.findBoardByName(newBoard.boardName);
    const boardNameIsOccupied = !foundBoardsWithSameName;
    console.log({ boardNameIsOccupied });

    if (boardNameIsOccupied) {
      foundBoardsWithSameName.forEach((foundBoard) => {
        const distanceToExistingBoard = getDistanceFromCoordinatesInKilometers(
          newBoard.mapCoordinates,
          foundBoard.mapCoordinates,
        );

        if (distanceToExistingBoard < ADMISSIBLE_DISTANCE_BETWEEN_SAME_NAMES_BOARDS) {
          throw new Error('Board with the same name is too near');
        }
      });
    }
    const createdBoard = await this.repository.createNewBoard(newBoard);
    return createdBoard;

  }

  async addNewAnnouncement(boardId, announcementId) {
    console.log('IN SERVICE');
    const { error } = validateAddingAnnouncement({ boardId, announcementId });
    if (error) {
      throw new Error(error.details[0].message);
    }
    console.log({ boardId }, { announcementId });

    const boardToAddNewAnnouncement = await this.repository.findBoardByID(boardId);

    if (boardToAddNewAnnouncement.announcements.includes(announcementId)) {
      throw new Error('Board already contains this announcement id!');
    }

    const updatedBoard = await this.repository.addNewAnnouncementId(boardId, announcementId);
    return updatedBoard;
  }
}
