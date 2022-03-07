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
    const createdBoard = await this.repository.createNewBoard(newBoard);

    //TODO nie dziala await!!! - brak mozliwosci zwrocenia ID
    console.log('IN SERVICE');
    console.log(createdBoard);
    return createdBoard;
  }

  async updateBoard(boardPropsToUpdate) {
    console.log('IN SERVICE');
    console.log(boardPropsToUpdate);
    if (!boardPropsToUpdate) {
      throw new Error('No data to update');
    }
    if (!boardPropsToUpdate._id) {
      throw new Error('No board id');
    }
    console.log('BEFORE FIND ');
    const foundBoardToUpdate = await this.repository.findBoardByID(boardPropsToUpdate._id);
    console.log('FIND BOARD BY ID');
    console.log(foundBoardToUpdate);
    const propsToUpdate = Object.keys(boardPropsToUpdate);
    propsToUpdate.forEach((prop) => {
      foundBoardToUpdate[prop] = boardPropsToUpdate[prop];
    });

    await this.repository.updateBoard(foundBoardToUpdate);
  }
}
