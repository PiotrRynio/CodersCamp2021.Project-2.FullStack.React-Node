import { HelloWorldService } from '../../service/HelloWorld/HelloWorld.service.js';
import { Router } from 'express';

export function helloWorldController() {
  const router = Router();

  router
    .route('/hello-world')
    // .get(HelloWorldService.getHelloWorld)
    // .get(() => HelloWorldService.getHelloWorld())
    .post((request, response) => {
      console.log('0000000000000');

      HelloWorldService.postHelloWorld('arg')
        .then((data)=>data)
        .catch((error) => {
          response.status(400).send({ message: error.message });
        });
    });

  return router;
}

// router
//   .route('/hello-world')
//   .get((request, response) => () => {
//     console.log('uuu');
//     HelloWorldService.getHelloWorld()
//       .then((data) => {
//         console.log('aaa');
//         response.status(200).json(data);
//       })
//       .catch((error) => {
//         console.log('elo');
//         console.log(error.message);
//         response.status(400).json(error.message);
//       });
//   })
