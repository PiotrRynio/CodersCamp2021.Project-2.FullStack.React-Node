import express from 'express';

export const testApi = (apiPath, router) => {
  const api = express();
  api.use(express.json());
  api.use(express.urlencoded({ extended: true }));
  api.use(apiPath, router);

  return api;
};
