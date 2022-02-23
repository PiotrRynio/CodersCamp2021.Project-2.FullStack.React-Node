import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectToMongoDb } from './common/repository/mongo/mongoDB.js';
import { UserRegistrationDetailsController } from './controller/UserRegistrationDetails/UserRegistrationDetails.controller.js';
import { UserRegistrationDetailRepository } from './repository/UserRegistrationDetails/UserRegistrationDetail.repository.js';
import { UserRegistrationDetailsService } from './service/UserRegistrationDetails/UserRegistrationDetails.service.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();

  const userRegistrationDetailRepository = new UserRegistrationDetailRepository();
  const userRegistrationDetailsService = new UserRegistrationDetailsService(
    userRegistrationDetailRepository,
  );
  const userRegistrationDetailsController = new UserRegistrationDetailsController(
    userRegistrationDetailsService,
  );

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));
  restApiServer.use('/rest-api', userRegistrationDetailsController);

  return restApiServer;
};
