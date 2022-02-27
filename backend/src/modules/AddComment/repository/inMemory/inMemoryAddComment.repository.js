export class InMemoryCommentRepository {
  constructor() {
    this.entities = {};
  }

  async createNewComment(commentDetails) {
    this.entities[commentDetails.content] = commentDetails;
  }
}
