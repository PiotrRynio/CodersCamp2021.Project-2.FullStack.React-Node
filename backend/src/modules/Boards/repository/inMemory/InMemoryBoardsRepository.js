export class InMemoryBoardsRepository {
  constructor() {
    this.entities = {};
  }
  async createNewBoard(boardDetails) {
    const nameAndCoords = `${boardDetails.name}+ ${boardDetails.coords}`;
    this.entities[nameAndCoords] = boardDetails;
  }

  async findBoard(nameAndCoords) {
    return Promise.resolve(
      Object.keys(this.entities).map((nameAndCoords) => this.entities[nameAndCoords]),
    );
  }
}
