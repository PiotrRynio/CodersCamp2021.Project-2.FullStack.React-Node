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

    await this.repository.createNewBoard(newBoard);
    return newBoard;
  }
}
