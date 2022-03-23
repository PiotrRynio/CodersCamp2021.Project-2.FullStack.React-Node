import { v4 as uuidv4 } from 'uuid';

export class InMemoryBoardsRepository {
  constructor() {
    this.entities = {};
  }
  createNewBoard(newBoard) {
    newBoard.id = newBoard.id || uuidv4();
    this.entities[newBoard.id] = newBoard;
    return this.entities[newBoard.id];
  }

  findBoardByName(boardName) {
    const foundArray = [];
    for (const board in this.entities) {
      if (this.entities[board].boardName == boardName) {
        foundArray.push(this.entities[board]);
      }
    }
    return foundArray;
  }

  findBoardByID(boardID) {
    const foundBoard = this.entities[boardID];

    return foundBoard;
  }

  addNewAnnouncementId(boardID, announcementID) {
    if (!boardID) {
      throw new Error('No board ID!');
    }
    if (!announcementID) {
      throw new Error('No announcement ID!');
    }

    this.entities[boardID]?.announcements.push(announcementID);
    return this.entities[boardID];
  }

  getBoardAnnouncements(boardID) {
    const foundBoardAnnouncements = this.entities[boardID]?.announcements;
    return foundBoardAnnouncements;
  }

  deleteBoardAnnouncement(announcementId) {
    if (!announcementId) {
      throw new Error('No announcement ID!');
    }
    let deletedAnnouncementId = undefined;
    for (const board in this.entities) {
      if (this.entities[board].announcements.includes(announcementId)) {
        const indexOfAnnouncementToDelete =
          this.entities[board].announcements.indexOf(announcementId);
        this.entities[board].announcements.splice(indexOfAnnouncementToDelete, 1);
        deletedAnnouncementId = announcementId;
        return this.entities[board];
      }
    }
    if (!deletedAnnouncementId) {
      throw new Error('Not found specified announcement id');
    }
  }

  getAll() {
    return this.entities;
  }
}
