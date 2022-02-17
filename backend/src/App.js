import express from 'express';
// import cors from 'cors';
// import { HelloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';
import dotenv from 'dotenv';

dotenv.config();

export const app = async () => {
  const restApiServer = express();

  return restApiServer;
};
