import { v4 as uuidv4 } from 'uuid';

export class InMemoryBoardsRepository {
  constructor() {
    this.entities = {};
  }
  async createNewBoard(newBoard) {
    newBoard.id = uuidv4();
    this.entities[newBoard.id] = newBoard;
  }

  async findBoardByName(boardName) {
    return Promise.resolve(Object.keys(this.entities).map((boardID) => this.entities[boardID]));
  }
}
