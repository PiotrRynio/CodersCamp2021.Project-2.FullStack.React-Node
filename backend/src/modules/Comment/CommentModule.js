import { CommentController } from './controller/Comment.controller.js';
import { CommentService } from './service/Comment.service.js';
import { InMemoryCommentRepository } from './repository/inMemory/inMemoryComment.repository.js';
import { MongoCommentRepository } from './repository/mongo/MongoComment.repository.js';

export const commentModule = (moduleRepositoryType, announcementService) => {
  const commentRepository = (repositoryType) => {
    if (repositoryType === 'MONGO') {
      return new MongoCommentRepository();
    }
    return new InMemoryCommentRepository();
  };

  const repository = commentRepository(moduleRepositoryType);
  const service = new CommentService(repository, announcementService);
  const controller = new CommentController(service);

  return [controller, service, repository];
};
