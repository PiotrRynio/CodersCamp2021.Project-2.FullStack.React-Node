import { MongoBoardsModel } from './MongoBoardsModel.js';
import { Board } from '../../service/Board.js';

export class MongoBoardsRepository {
  constructor() {}

  async getAll() {
    const foundBoards = await MongoBoardsModel.find();
    return foundBoards;
  }

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

  async getBoardAnnouncements(boardID) {
    const returnedData = await MongoBoardsModel.findById(boardID).select('announcements').exec();
    const foundBoardAnnouncements = returnedData?.announcements?.map((announcement) =>
      announcement.valueOf(),
    );
    return foundBoardAnnouncements;
  }

  async deleteBoardAnnouncement(announcementId) {
    const foundBoardToUpdateAnnouncements = await MongoBoardsModel.findOne({
      announcements: announcementId,
    });
    if (!foundBoardToUpdateAnnouncements) {
      throw new Error('Board not found!');
    }

    const indexOfAnnouncementToDelete =
      foundBoardToUpdateAnnouncements.announcements.indexOf(announcementId);

    foundBoardToUpdateAnnouncements.announcements.splice(indexOfAnnouncementToDelete, 1);

    await MongoBoardsModel.findOneAndUpdate(
      { announcements: announcementId },
      { announcements: foundBoardToUpdateAnnouncements.announcements },
      { upsert: true, new: true },
    );

    return announcementId;
  }
}

function mongoDocumentToDomain(mongoDocument) {
  return new Board({
    id: mongoDocument._id.valueOf(),
    boardName: mongoDocument.boardName,
    mapCoordinates: mongoDocument.mapCoordinates,
    accessType: mongoDocument.accessType,
    dateCreated: mongoDocument.dateCreated,
    announcements: mongoDocument.announcements,
    avatarUrl: mongoDocument.avatarUrl,
    description: mongoDocument.description,
    adminId: mongoDocument.adminId.valueOf(),
  });
  lo;
}
