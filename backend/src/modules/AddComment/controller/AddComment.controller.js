import { AddCommentService } from '../../service/AddComment.service.js';
import { Router } from 'express';

export function AddCommentController() {
  const router = Router();

  router.route('/addComment').post(AddCommentService.postAddComment);

  return router;
}
