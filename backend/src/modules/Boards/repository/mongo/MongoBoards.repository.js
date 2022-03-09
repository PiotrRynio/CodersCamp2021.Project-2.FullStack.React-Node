import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  async createNewBoard(newBoard) {
    const createdBoard = await MongoBoardsModel.create(newBoard);
    return createdBoard;
    //  return mongoDocumentToDomain(createdBoard);
  }

  async findBoardByName(boardName) {
    const mongoFindResult = await MongoBoardsModel.find({ boardName: boardName }).exec();
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }

  async findBoardByID(boardId) {
    console.log('IN FIND');
    console.log(boardId);
    const mongoFindResult = await MongoBoardsModel.findById(boardId).exec();
    if (!mongoFindResult) {
      throw new Error('Board not found!');
    }
    const foundBoard = mongoDocumentToDomain(mongoFindResult);
    return foundBoard;
  }

  async addNewAnnouncementId(boardID, announcementID) {
    console.log({ boardID }, { announcementID });
    console.log('ON MONGO REPO');

    const updatedBoard = await MongoBoardsModel.findByIdAndUpdate(
      { _id: boardID },
      { $push: { announcements: announcementID } },
      { new: true },
    );
    console.log({ updatedBoard });
    return updatedBoard;
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
