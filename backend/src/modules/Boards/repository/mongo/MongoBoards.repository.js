import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  createNewBoard(newBoard) {
    const createdBoard = MongoBoardsModel.create(newBoard).then((createdBoard) => {
      console.log('IN REPO');
      console.log(mongoDocumentToDomain(createdBoard));
      return mongoDocumentToDomain(createdBoard);
    });
    return createdBoard;
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
    return mongoDocumentToDomain(mongoFindResult);
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
  });
}
