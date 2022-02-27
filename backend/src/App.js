import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectToMongoDb } from './common/repository/mongo/mongoDB.js';
import { UsersRegistrationController } from './modules/UsersRegistration/controller/UsersRegistration.controller.js';
import { UserRegistrationService } from './modules/UsersRegistration/service/UserRegistration.service.js';
import { MongoUsersRegistrationRepository } from './modules/UsersRegistration/repository/mongo/MongoUsersRegistration.repository.js';
import { InMemoryUsersRegistrationRepository } from './modules/UsersRegistration/repository/inMemory/InMemoryUsersRegistration.repository.js';
import { CommentController } from './modules/AddComment/controller/AddComment.controller.js';
import { AddCommentService } from './modules/AddComment/service/AddComment.service.js';
import { MongoCommentRepository } from './modules/AddComment/repository/mongo/MongoAddComment.repository.js';
import { InMemoryCommentRepository } from './modules/AddComment/repository/inMemory/inMemoryAddComment.repository.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();
  const repositoryType = 'MONGO';
  const userRegistrationRepository = userRegistrationDetailRepository(repositoryType);

  const userRegistrationDetailsService = new UserRegistrationService(userRegistrationRepository);
  const userRegistrationDetailsController = new UsersRegistrationController(
    userRegistrationDetailsService,
  );

  const addCommentRepository = new commentDetailsRepository(repositoryType);

  const addCommentService = new AddCommentService(addCommentRepository);

  const addCommentController = new CommentController(addCommentService);

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));
  restApiServer.use('/rest-api', userRegistrationDetailsController.router);
  restApiServer.use('/rest-api', addCommentController.router);

  return restApiServer;
};

function userRegistrationDetailRepository(inMemoryRepositoryType) {
  if (inMemoryRepositoryType === 'MONGO') {
    return new MongoUsersRegistrationRepository();
  }
  return new InMemoryUsersRegistrationRepository();
}

function commentDetailsRepository(inMemoryRepositoryType) {
  if (inMemoryRepositoryType === 'MONGO') {
    return new MongoCommentRepository();
  }
  return new InMemoryCommentRepository();
}
