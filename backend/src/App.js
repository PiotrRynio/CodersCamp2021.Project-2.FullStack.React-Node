import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocumentation } from '../swagger.js';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { connectToMongoDb } from './common/repository/mongo/mongoDB.js';
import { UsersController } from './modules/UsersRegistration/controller/Users.controller.js';
import { UsersService } from './modules/UsersRegistration/service/Users.service.js';
import { MongoUsersRepository } from './modules/UsersRegistration/repository/mongo/MongoUsers.repository.js';
import { InMemoryUsersRepository } from './modules/UsersRegistration/repository/inMemory/InMemoryUsers.repository.js';
import { announcementsModule } from './modules/Announcements/AnnouncementsModule.js';
import { boardsModule } from './modules/Boards/boardsModule.js';
import { commentModule } from './modules/Comment/CommentModule.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();
  const repositoryType = 'MONGO';
  const userRepository = userRegistrationDetailRepository(repositoryType);
  const usersService = new UsersService(userRepository);
  const usersController = new UsersController(usersService);
  const [boardsController, boardsService] = boardsModule(repositoryType, usersService);
  usersService.boardsService = boardsService;

  const [announcementController, announcementService] = announcementsModule(
    repositoryType,
    boardsService,
  );
  const [commentsController] = commentModule(repositoryType, announcementService);

  const restApiServer = express();
  restApiServer.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    }),
  );
  restApiServer.use(cookieParser());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));

  restApiServer.use(morgan('combined'));

  restApiServer.use('/rest-api', usersController.router);
  restApiServer.use('/rest-api', boardsController.router);
  restApiServer.use('/rest-api', announcementController.router);
  restApiServer.use('/rest-api', commentsController.router);

  restApiServer.use('/rest-api-documentation', swaggerUi.serve);
  restApiServer.use('/rest-api-documentation', swaggerUi.setup(swaggerDocumentation));

  return restApiServer;
};

function userRegistrationDetailRepository(inMemoryRepositoryType) {
  if (inMemoryRepositoryType === 'MONGO') {
    return new MongoUsersRepository();
  }
  return new InMemoryUsersRepository();
}
