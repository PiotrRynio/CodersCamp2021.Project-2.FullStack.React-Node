import { json } from 'express';
import { BoardsRepository } from '../../repository/Boards/Boards.repository.js';
import validateBoard from './validateBoard.js';

export class BoardsService {
  static async addBoard(newBoard) {
    console.log(newBoard);

    const { error } = validateBoard(newBoard);
    if (error) {
      console.log('error walidacja');
      throw new Error(error.details[0].message);
    }

    await BoardsRepository.createNewBoard(newBoard);
    return json(newBoard);
  }
}
