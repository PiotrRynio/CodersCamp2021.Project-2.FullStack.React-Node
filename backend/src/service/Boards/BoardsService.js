import { BoardsRepository } from '../../repository/Boards/Boards.repository.js';
import BoardsValidationSchema from './BoardsValidationSchema.js';
import { json } from 'express';

export class BoardsService {
  static async addOne(newBoard) {
    console.log(newBoard);

    // const { error } = BoardsValidationSchema.validate(newBoard);
    if (error) {
      console.error(error);
      console.log('error walidacja');
      throw new Error(error.details[0].message);
    }

    console.log(newBoard);
    await BoardsRepository.addOne(newBoard);
    return json(newBoard);
  }
}
