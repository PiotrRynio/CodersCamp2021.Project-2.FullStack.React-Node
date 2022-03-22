import { CommentController } from './controller/Comment.controller.js';
import { CommentService } from './service/Comment.service.js';
import { InMemoryCommentRepository } from './repository/inMemory/InMemoryComment.repository.js';
import { MongoCommentRepository } from './repository/mongo/MongoComment.repository.js';

export const commentModule = (moduleRepositoryType) => {
  const addCommentRepository = (repositoryType) => {
    if (repositoryType === 'MONGO') {
      return new MongoCommentRepository();
    }
    return new InMemoryCommentRepository();
  };

  const repository = addCommentRepository(moduleRepositoryType);
  const service = new CommentService(repository);
  const controller = new CommentController(service);

  return controller.router;
};
