import { HelloWorldService } from '../../service/HelloWorld/HelloWorld.service.js';
import { Router } from 'express';

export function helloWorldController() {
  const router = Router();

  const helloWorldService = new HelloWorldService();

  router.route('/hello-world').get(helloWorldService.getHelloWorld);

  return router;
}
