import { BoardsModel } from '../../model/Boards/Boards.model.js';
import { BoardsRepository } from '../../repository/Boards/Boards.repository.js';
import BoardsValidationSchema from './BoardsValidationSchema.js';

export class BoardsService {
  static async addOne(req, res) {
    const { error } = BoardsValidationSchema.validate(req.body);
    if (error) {
      console.log('error walidacja');
      return res.status(400).send(error.details[0].message);
    }
    console.log(req.body);
    const newBoard = new BoardsModel({
      boardName: req.body.boardName,
      coords: req.body.coords,
      accessType: req.body.accessType,
      adminId: req.body.adminId,
      dateCreated: req.body.dateCreated,
      announcements: [],
    });
    console.log(newBoard);
    await BoardsRepository.addOne(newBoard);
    res.json(newBoard);
  }
}
