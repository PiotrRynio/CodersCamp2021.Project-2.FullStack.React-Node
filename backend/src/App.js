import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { BoardsController } from './modules/Boards/controller/BoardsController.js';
import { connectToMongoDb } from './utils/dataBase/mongo/mongoDB.js';
import { BoardsService } from './modules/Boards/service/Boards.service.js';
import { MongoBoardsRepository } from './modules/Boards/repository/mongo/MongoBoards.repository.js';
import { InMemoryBoardsRepository } from './modules/Boards/repository/inMemory/InMemoryBoards.repository.js';

dotenv.config();

export const app = async () => {
  await connectToMongoDb();
  const repositoryType = 'MONGO';

  const boardsService = new BoardsService(boardsRepository(repositoryType));
  const boardsController = new BoardsController(boardsService);

  const restApiServer = express();
  restApiServer.use(cors());
  restApiServer.use(express.json());
  restApiServer.use(express.urlencoded({ extended: true }));
  restApiServer.use(morgan('combined'));
  restApiServer.use('/rest-api', boardsController.router);

  return restApiServer;
};

function boardsRepository(inMemoryRepositoryType) {
  if (inMemoryRepositoryType === 'MONGO') {
    return new MongoBoardsRepository();
  }
  return new InMemoryBoardsRepository();
}
