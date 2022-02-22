import { BoardsRepository } from '../../repository/Boards/Boards.repository.js';
import BoardsValidationSchema from './BoardsValidationSchema.js';
import { json } from 'express';

export class BoardsService {
  static async addOne(newBoard) {
    console.log(newBoard);

    const { error } = BoardsValidationSchema.validate(newBoard);
    if (error) {
      console.log('error walidacja');
      throw new Error(error.details[0].message);
    }

    await BoardsRepository.createNewBoard(newBoard);
    return json(newBoard);
  }
}
