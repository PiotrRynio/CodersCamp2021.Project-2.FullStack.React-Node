import { Router } from 'express';
import { BoardsService } from '../../service/Boards/BoardsService.js';

export function BoardsController() {
  const router = Router();
  router.route('/').get(BoardsService.addOne).post(BoardsService.addOne);

  return router;
}
