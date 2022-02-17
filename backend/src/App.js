import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { HelloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';

dotenv.config();
export const app = async () => {
  const restApiServer = express();
  restApiServer.use(cors());

  new HelloWorldController(restApiServer);

  return restApiServer;
};
