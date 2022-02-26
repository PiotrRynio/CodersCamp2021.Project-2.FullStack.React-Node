import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectToMongoDb } from './utils/dataBase/mongo/mongoDB.js';
import { BoardsModule } from './modules/Boards/BoardsModule.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();
  const repositoryType = 'MONGO';

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));
  restApiServer.use('/rest-api', BoardsModule(repositoryType));

  return restApiServer;
};
