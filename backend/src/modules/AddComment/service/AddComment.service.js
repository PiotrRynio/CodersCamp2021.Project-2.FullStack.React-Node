import { Comment } from './AddComment.js';

export class AddCommentService {
  constructor(repository) {
    this.repository = repository;
  }

  async addComment(comment) {
    const commentData = new Comment({
      userId: comment.userId,
      content: comment.content,
      date: comment.date,
    });

    await this.repository.createNewComment(commentData);

    return commentData.content;
  }
}
