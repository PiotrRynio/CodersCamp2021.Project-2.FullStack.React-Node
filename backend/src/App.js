import express from 'express';
// import cors from 'cors';
// import { HelloWorldController } from './controller/HelloWorld/HelloWorld.controller.js';
import dotenv from 'dotenv';
import {HelloWorldController} from "./controller/HelloWorld/HelloWorld.controller.js";

dotenv.config();

export const app = async () => {
  const restApiServer = express();

 new HelloWorldController(restApiServer);


  return restApiServer;
};
