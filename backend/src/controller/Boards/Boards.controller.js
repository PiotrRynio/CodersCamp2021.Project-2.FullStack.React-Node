import { Router } from 'express';
import { BoardsService } from '../../service/Boards/BoardsService.js';
import { BoardsModel } from '../../model/Boards/Boards.model.js';

export function BoardsController() {
  const router = Router();
  router
    .route('/')
    .get(BoardsService.addOne)
    .post((request, response) => {
      const newBoard = new BoardsModel({
        boardName: request.body.boardName,
        coords: request.body.coords,
        accessType: request.body.accessType,
        adminId: request.body.adminId,
        dateCreated: request.body.dateCreated,
        announcements: [],
      });

      BoardsService.addOne(newBoard)
        .then((data) => response.status(200).send({ data }))
        .catch((error) => {
          console.log('error catch');

          response.status(400).send({ message: error.message });
        });
    });

  return router;
}
