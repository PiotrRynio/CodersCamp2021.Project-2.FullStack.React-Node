import { Router } from 'express';
import { BoardsService } from '../../service/Boards/BoardsService.js';
import { Board } from '../../service/Boards/Board.js';

export function BoardsController() {
  const router = Router();
  router
    .route('/')
    .get(BoardsService.addOne)
    .post((request, response) => {
      console.log(request.body);
      BoardsService.addOne(
        new Board({
          boardName: request.body.boardName,
          coords: request.body.coords,
          accessType: request.body.accessType,
          adminId: request.body.adminId,
          dateCreated: request.body.dateCreated,
          announcements: [],
        }),
      )
        .then((data) => response.status(200).send({ data }))
        .catch((error) => {
          console.log('error catch');

          response.status(400).send({ message: error.message });
        });
    });

  return router;
}
