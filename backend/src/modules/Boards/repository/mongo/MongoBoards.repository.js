import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  async createNewBoard(newBoard) {
    const createdBoard = await MongoBoardsModel.create(newBoard).then((createdBoard) => {
      return mongoDocumentToDomain(createdBoard);
    });
  }
}

function mongoDocumentToDomain(mongoDocument) {
  return new Board({
    boardId: mongoDocument._id.toString(),
    boardName: mongoDocument.boardName,
    coords: mongoDocument.coords,
    accessType: mongoDocument.accessType,
    adminId: mongoDocument.adminId,
    dateCreated: mongoDocument.dateCreated,
    announcements: mongoDocument.announcements,
  });
}
