export class BoardsRepository {
  static async addOne(newBoard) {
    newBoard.save();
    return;
  }
}
