import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectToMongoDb } from './common/repository/mongo/mongoDB.js';
import { userRegistrationDetailsController } from './controller/UserRegistrationDetails/UserRegistrationDetails.controller.js';
import { announcementsController } from './controller/Announcement/Announcements.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));
  restApiServer.use('/rest-api', userRegistrationDetailsController());
  restApiServer.use('/rest-api', announcementsController());

  // TODO: Pull maina i przerobić na wersję z modułami.

  return restApiServer;
};
