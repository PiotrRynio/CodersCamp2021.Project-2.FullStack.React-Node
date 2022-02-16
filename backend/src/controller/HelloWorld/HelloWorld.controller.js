import express, { Router } from 'express';
import { HelloWorldService } from '../../service/HelloWorld/HelloWorld.service.js';

export class HelloWorldController {
  constructor(router) {
    this.router = router;
    this.helloWorldService = new HelloWorldService();
    // this.router.get('/helloWorld', () => {
    //   console.log('www');
    // });
    this.router.get('/helloWorld', this.helloWorldService.getHelloWorld);
  }

  // getRouter() {
  //   return this.router();
  // }

  // this.router.get(  '/helloWorld/',  service.getHelloWorld)
}

// eslint-disable-next-line import/prefer-default-export
