import { json } from 'express';
import { MongoBoardsRepository } from '../repository/mongo/MongoBoards.repository.js';
import validateBoard from './validateBoard.js';

export class BoardsService {
  async addBoard(newBoard) {
    const { error } = validateBoard(newBoard);
    if (error) {
      throw new Error(error.details[0].message);
    }

    await MongoBoardsRepository.createNewBoard(newBoard);
    return newBoard;
  }
}
