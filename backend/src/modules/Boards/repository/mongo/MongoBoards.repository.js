import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  async createNewBoard(newBoard) {
    const createdBoard = await MongoBoardsModel.create(newBoard).then((createdBoard) => {
      return mongoDocumentToDomain(createdBoard);
    });
  }
  async findBoardByName(boardName) {
    const mongoFindResult = await MongoBoardsModel.find({ boardName: boardName }).exec();
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }

  async findBoardByID(boardId) {
    const mongoFindResult = await MongoBoardsModel.findById(boardId).exec();
    if (!!mongoFindResult) {
      throw new Error('Board not found!');
    }
    return mongoDocumentToDomain(mongoFindResult);
  }

  async updateBoard(boardToUpdate) {
    const updatedBoard = await MongoBoardsModel.updateOne({ _id: updatedBoard.id }, boardToUpdate, {
      new: true,
    });
  }
}

function mongoDocumentToDomain(mongoDocument) {
  return new Board({
    boardId: mongoDocument._id.toString(),
    boardName: mongoDocument.boardName,
    mapCoordinates: mongoDocument.mapCoordinates,
    accessType: mongoDocument.accessType,
    adminId: mongoDocument.adminId,
    dateCreated: mongoDocument.dateCreated,
    announcements: mongoDocument.announcements,
  });
}
