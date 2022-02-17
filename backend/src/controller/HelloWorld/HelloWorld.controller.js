import { HelloWorldService } from '../../service/HelloWorld/HelloWorld.service.js';
import { Router } from 'express';

export function helloWorldController() {
  const router = Router();

  router.route('/hello-world').get(HelloWorldService.getHelloWorld);

  return router;
}
