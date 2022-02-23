import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { helloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';
import { boardsController } from './controller/Boards/BoardsController.js';
import { connectToMongoDb } from './utils/dataBase/mongo/mongoDB.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));

  restApiServer.use('/rest-api', helloWorldController());
  restApiServer.use('/rest-api/boards', boardsController());

  return restApiServer;
};
