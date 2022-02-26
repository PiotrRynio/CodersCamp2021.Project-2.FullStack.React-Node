import { MongoBoardsRepository } from '../repository/mongo/MongoBoards.repository.js';
import validateBoard from './validateBoard.js';

export class BoardsService {
  constructor(repository) {
    this.repository = repository;
  }

  async addBoard(newBoard) {
    const { error } = validateBoard(newBoard);
    if (error) {
      throw new Error(error.details[0].message);
    }
    const foundValues = await this.repository.findBoardByName(newBoard.boardName);
    const boardNameIsOccupied = !!foundValues;
    console.log(`board name is occupied:  ${boardNameIsOccupied}`);

    if (boardNameIsOccupied) {
      throw new Error('Wrong board name');
    }

    await this.repository.createNewBoard(newBoard);
    return newBoard;
  }
}
