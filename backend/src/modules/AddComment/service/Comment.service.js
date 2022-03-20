export class CommentService {
  constructor(repository) {
    this.repository = repository;
  }

  async addComment(newComment) {
    if (!newComment.content) {
      throw new Error('No comment!');
    }
    await this.repository.createNewComment(newComment);

    return newComment.content;
  }
}
