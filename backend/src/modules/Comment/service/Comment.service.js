import { NotFoundError } from '../../../utils/NotFoundError.js';

export class CommentService {
  constructor(repository, announcementService) {
    this.repository = repository;
    this.announcementService = announcementService;
  }

  async addComment(commentBody, announcementId) {
    if (!commentBody) {
      throw new Error('No comment!');
    }
    const newComment = await this.repository.createNewComment(commentBody);
    await this.announcementService.addCommentIdToAnnouncement(announcementId, newComment.id);
    return newComment;
  }

  async getAnnouncementComments(announcementId) {
    const commentsIds = await this.announcementService.getCommentsIdsByAnnouncementId(
      announcementId,
    );
    const returnedComments = [];
    for (const commentId of commentsIds) {
      const comment = await this.repository.findOneByCommentId(commentId);
      if (!comment) {
        throw new NotFoundError('Comment');
      }
      returnedComments.push(comment);
    }
    return returnedComments;
  }
}
