import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { helloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';

dotenv.config();
export const app = async () => {
  const restApiServer = express();
  restApiServer.use(cors());

  helloWorldController(restApiServer);

  return restApiServer;
};
