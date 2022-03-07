import { CommentController } from './controller/AddComment.controller.js';
import { AddCommentService } from './service/AddComment.service.js';
import { InMemoryCommentRepository } from './repository/inMemory/inMemoryAddComment.repository.js';
import { MongoCommentRepository } from './repository/mongo/MongoAddComment.repository.js';

export const addCommentModule = (moduleRepositoryType) => {
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
