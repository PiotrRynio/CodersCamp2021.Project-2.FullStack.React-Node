export class BoardsRepository {
  static async addOne(newBoard) {
    newBoard.save();
    console.log('w repo');
    return;
  }
}
