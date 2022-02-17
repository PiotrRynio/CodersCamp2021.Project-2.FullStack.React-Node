import express from 'express';

import dotenv from 'dotenv';

dotenv.config();

export const app = async () => {
  const restApiServer = express();

  return restApiServer;
};
