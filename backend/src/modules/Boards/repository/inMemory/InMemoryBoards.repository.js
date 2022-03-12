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
    return Object.keys(this.entities).map((boardID) => this.entities[boardID]);
  }

  findBoardByID(boardID) {
    const foundBoard = this.entities[boardID];
    if (!foundBoard) {
      throw new Error('Board not found');
    }
    return foundBoard;
  }

  addNewAnnouncementId(boardID, announcementID) {
    this.entities[boardID]?.announcements.push(announcementID);
    return this.entities[boardID];
  }

  getAll() {
    return this.entities;
  }

  removeAllBoards() {
    for (const boardProperty in this.entities) delete this.entities[boardProperty];
    return this.entities;
  }
}
