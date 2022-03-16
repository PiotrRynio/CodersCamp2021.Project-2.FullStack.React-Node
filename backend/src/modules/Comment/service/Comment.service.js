export class CommentService {
  constructor(repository) {
    this.repository = repository;
  }

  async addComment(newComment) {
    await this.repository.createNewComment(newComment);

    return newComment.content;
  }
}
