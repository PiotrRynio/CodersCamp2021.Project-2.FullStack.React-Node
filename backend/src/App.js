import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import cors from 'cors';
import { HelloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';

dotenv.config();

// eslint-disable-next-line import/prefer-default-export
export const app = async () => {
  const restApiServer = express();

  return restApiServer;
};
