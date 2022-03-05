import validateBoard from './validateBoard.js';
import { getDistanceFromCoordinatesInKilometers } from './getDistanceFromCoordinatesInKilometers.js';
import { ADMISSIBLE_DISTANCE_BETWEEN_SAME_NAMES_BOARDS } from '../../../constans/values.js';

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
    const boardNameIsOccupied = !!foundBoardsWithSameName;

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
    await this.repository.createNewBoard(newBoard);
    return newBoard;
  }

  async updateBoard(boardPropsToUpdate) {
    if (!!boardPropsToUpdate) {
      throw new Error('No data to update');
    }
    if (!!boardPropsToUpdate.id) {
      throw new Error('No board id');
    }
    const foundBoardToUpdate = await this.repository.findBoardByID(boardPropsToUpdate.id);
    const propsToUpdate = Object.keys(boardPropsToUpdate);
    propsToUpdate.forEach((prop) => {
      foundBoardToUpdate[prop] = boardPropsToUpdate[prop];
    });

    await this.repository.updateBoard(foundBoardToUpdate);
  }
}
