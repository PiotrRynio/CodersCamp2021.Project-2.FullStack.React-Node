import { Router } from 'express';
import { Comment } from '../service/Comment.js';

export class CommentController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router
      .route('/announcements/:id/comments')
      .post((request, response) => {
        const announcementId = request.params.id;
        this.service
          .addComment(
            new Comment({
              content: request.body.content,
            }),
            announcementId,
          )
          .then((content) => {
            const returnedData = { content: content };
            response.status(200).send(returnedData);
          })
          .catch((error) => {
            response.status(400).send({ message: error.message });
          });
      })
      .get((request, response) => {
        const announcementId = request.params.id;
        this.service
          .getAnnouncementComments(announcementId)
          .then((content) => {
            const returnedData = { comments: content };
            response.status(200).send(returnedData);
          })
          .catch((error) => {
            response.status(400).send({ message: error.message });
          });
      });
  }
}
