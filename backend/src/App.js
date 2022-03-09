import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectToMongoDb } from './common/repository/mongo/mongoDB.js';
import { UsersRegistrationController } from './modules/UsersRegistration/controller/UsersRegistration.controller.js';
import { UserRegistrationService } from './modules/UsersRegistration/service/UserRegistration.service.js';
import { MongoUsersRegistrationRepository } from './modules/UsersRegistration/repository/mongo/MongoUsersRegistration.repository.js';
import { InMemoryUsersRegistrationRepository } from './modules/UsersRegistration/repository/inMemory/InMemoryUsersRegistration.repository.js';
import { announcementsModule } from './modules/Announcements/AnnouncementsModule.js';
import { boardsModule } from './modules/Boards/boardsModule.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();
  const repositoryType = 'MONGO';

  const userRegistrationDetailsService = new UserRegistrationService(
    userRegistrationDetailRepository(repositoryType),
  );
  const userRegistrationDetailsController = new UsersRegistrationController(
    userRegistrationDetailsService,
  );
  const [boardsController, boardsService] = boardsModule(repositoryType);
  const [announcementController] = announcementsModule(repositoryType, boardsService);

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));
  restApiServer.use('/rest-api', userRegistrationDetailsController.router);
  restApiServer.use('/rest-api', announcementController.router);
  restApiServer.use('/rest-api', boardsController.router);

  return restApiServer;
};

function userRegistrationDetailRepository(inMemoryRepositoryType) {
  if (inMemoryRepositoryType === 'MONGO') {
    return new MongoUsersRegistrationRepository();
  }
  return new InMemoryUsersRegistrationRepository();
}
