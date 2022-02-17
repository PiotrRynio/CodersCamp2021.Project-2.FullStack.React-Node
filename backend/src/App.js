import express from 'express';
// import cors from 'cors';
// import { HelloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';
import dotenv from 'dotenv';
import { helloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';

dotenv.config();

export const app = async () => {
  const restApiServer = express();

  helloWorldController(restApiServer);

  return restApiServer;
};
