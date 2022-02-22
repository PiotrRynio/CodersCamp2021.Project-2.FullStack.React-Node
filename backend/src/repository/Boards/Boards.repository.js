import { BoardsModel } from '../../repository/Boards/Boards.model.js';
import { Board } from '../../service/Boards/Board.js';

export class BoardsRepository {
  static async createNewBoard(newBoard) {
    const createdUser = await BoardsModel.create(newBoard);
    console.log(createdUser);
  }
}

function mongoDocumentToDomain(mongoDocument) {
  return new Board({
    userId: mongoDocument._id.toString(),
    firstName: mongoDocument.firstName,
    lastName: mongoDocument.lastName,
    email: mongoDocument.email,
    password: mongoDocument.password,
  });
}
