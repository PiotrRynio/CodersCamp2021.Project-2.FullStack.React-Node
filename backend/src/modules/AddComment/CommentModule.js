import { CommentController } from './controller/Comment.controller.js';
import { AddCommentService } from './service/Comment.service.js';
import { InMemoryCommentRepository } from './repository/inMemory/inMemoryComment.repository.js';
import { MongoCommentRepository } from './repository/mongo/MongoComment.repository.js';

export const CommentModule = (moduleRepositoryType) => {
  const addCommentRepository = (repositoryType) => {
    if (repositoryType === 'MONGO') {
      return new MongoCommentRepository();
    }
    return new InMemoryCommentRepository();
  };

  const repository = addCommentRepository(moduleRepositoryType);
  const service = new AddCommentService(repository);
  const controller = new CommentController(service);

  return controller.router;
};
