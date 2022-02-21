import { HelloWorldService } from '../../service/HelloWorld/HelloWorld.service.js';
import { Router } from 'express';

export function helloWorldController() {
  const router = Router();

  router
    .route('/hello-world')
    // .get(() => HelloWorldService.getHelloWorld())
    .post((request, response) => {
      HelloWorldService.postHelloWorld('arg')
        .then((data) => data)
        .catch((error) => {
          response.status(400).send({ message: error.message });
        });
    });

  return router;
}
