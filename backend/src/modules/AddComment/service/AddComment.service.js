import { AddComment } from './AddComment';

export class AddCommentService {
  constructor(repository) {
    this.repository = repository;
  }

  async createComment(addComment) {
    const commentObject = new UserRegistration({
      userId: addComment.userId,
      board: addComment.board,
      content: addComment.content,
      date: addComment.date,
    });

    await this.repository.createNewComment(commentObject);

    return commentObject.content;
  }
}
