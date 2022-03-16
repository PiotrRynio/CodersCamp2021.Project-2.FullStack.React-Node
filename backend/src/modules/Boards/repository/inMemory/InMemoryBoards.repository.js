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
    this.entities[boardID]?.announcements.push(announcementID);
    return this.entities[boardID];
  }
  getBoardAnnouncements(boardID) {
    const foundBoardAnnouncements = this.entities[boardID]?.announcements;
    return foundBoardAnnouncements;
  }

  getAll() {
    return this.entities;
  }
}
