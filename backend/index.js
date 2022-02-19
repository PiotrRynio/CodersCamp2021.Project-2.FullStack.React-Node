import express from 'express';
import cors from 'cors';
import { app } from './src/App.js';
import routesUrls from './src/routes/routes.js';
console.log('Application was started');

const port = process.env.REST_API_PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/', routesUrls);

app().then((restApiServer) => {
  restApiServer.listen(port);
  console.log(`[App]: REST API listening on port ${port}`);
});
