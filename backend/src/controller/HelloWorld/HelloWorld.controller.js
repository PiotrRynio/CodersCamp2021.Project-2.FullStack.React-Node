import { HelloWorldService } from '../../service/HelloWorld/HelloWorld.service.js';

export function helloWorldController(router) {
  const helloWorldService = new HelloWorldService();

  router.get('/helloWorld', helloWorldService.getHelloWorld);
}
