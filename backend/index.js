import { app } from './src/App.js';

console.log('Application was started');

const port = process.env.REST_API_PORT || 5000;

app().then((restApiServer) => {
  restApiServer.listen(port);
  console.log(`[App]: REST API listening on port ${port}`);
});
