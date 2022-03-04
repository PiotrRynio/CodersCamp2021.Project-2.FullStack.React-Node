import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  async createNewBoard(newBoard) {
    return await MongoBoardsModel.create(newBoard).then((createdBoard) => {
      return mongoDocumentToDomain(createdBoard);
    });
  }
  async findBoardByName(boardName) {
    const mongoFindResult = await MongoBoardsModel.find({ boardName: boardName }).exec();
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }
}

function mongoDocumentToDomain(mongoDocument) {
  return new Board({
    id: mongoDocument._id.toString(),
    boardName: mongoDocument.boardName,
    mapCoordinates: mongoDocument.mapCoordinates,
    accessType: mongoDocument.accessType,
    adminId: mongoDocument.adminId,
    dateCreated: mongoDocument.dateCreated,
    announcements: mongoDocument.announcements,
    avatarUrl: mongoDocument.avatarUrl,
    description: mongoDocument.description,
  });
}
