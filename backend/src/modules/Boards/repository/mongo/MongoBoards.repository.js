import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  async createNewBoard(newBoard) {
    const createdBoard = await MongoBoardsModel.create(newBoard);
    return createdBoard;
  }

  async findBoardByName(boardName) {
    const mongoFindResult = await MongoBoardsModel.find({ boardName: boardName }).exec();
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }

  async findBoardByID(boardId) {
    const mongoFindResult = await MongoBoardsModel.findById(boardId).exec();
    if (!mongoFindResult) {
      throw new Error('Board not found!');
    }
    return mongoDocumentToDomain(mongoFindResult);
  }

  async addNewAnnouncementId(boardID, announcementID) {
    const updatedBoard = await MongoBoardsModel.findByIdAndUpdate(
      { _id: boardID },
      { $push: { announcements: announcementID } },
      { new: true },
    );
    return mongoDocumentToDomain(updatedBoard);
  }
}

function mongoDocumentToDomain(mongoDocument) {
  return new Board({
    id: mongoDocument._id.valueOf(),
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
