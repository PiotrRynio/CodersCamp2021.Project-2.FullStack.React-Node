import { Router } from 'express';
import { Comment } from '../service/Comment.js';

export class CommentController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router.route('/add-comment').post((request, response) => {
      this.service
        .addComment(
          new Comment({
            content: request.body.content,
          }),
        )
        .then((content) => {
          const returnedData = { content: content };
          response.status(200).send(returnedData);
        })
        .catch((error) => {
          response.status(400).send({ message: error.message });
        });
    });
  }
}
