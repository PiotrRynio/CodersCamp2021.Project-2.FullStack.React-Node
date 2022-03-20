import { Router } from 'express';

export class AnnouncementsController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router
      .route('/boards/:id/announcements')
      .post((request, response) => {
        const boardId = request.params.id;
        this.service
          .addAnnouncement(request.body, boardId)
          .then((announcements) => {
            const returnedData = { announcements: announcements };
            response.status(200).send(returnedData);
          })
          .catch((error) => {
            response.status(400).send({ message: error.message });
          });
      })
      .get((request, response) => {
        const boardId = request.params.id;
        this.service
          .findBoardAnnouncements(boardId)
          .then((announcements) => {
            const returnedData = { announcements: announcements };
            response.status(200).send(returnedData);
          })
          .catch((error) => {
            response.status(400).send({ message: error.message });
          });
      });

    this.router
      .route('/announcements/:id')
      .get((request, response) => {
        const id = request.params.id;
        this.service
          .findAnnouncement(id)
          .then((announcement) => {
            const returnedAnnouncement = { announcement: announcement };
            response.status(200).send(returnedAnnouncement);
          })
          .catch((error) => {
            if (error.name === 'NotFoundError') {
              response.status(404).send({ message: error.message });
            } else {
              response.status(400).send({ message: error.message });
            }
          });
      })
      .delete((request, response) => {
        const id = request.params.id;
        this.service
          .deleteAnnouncement(id)
          .then((announcement) => {
            const returnedAnnouncement = { announcement: announcement };
            response.status(200).send(returnedAnnouncement);
          })
          .catch((error) => {
            if (error.name === 'NotFoundError') {
              response.status(404).send({ message: error.message });
            } else {
              response.status(400).send({ message: error.message });
            }
          });
      })
      .patch((request, response) => {
        const id = request.params.id;
        this.service
          .updateAnnouncement(id, request.body)
          .then((announcement) => {
            const returnedAnnouncement = { announcement: announcement };
            response.status(200).send(returnedAnnouncement);
          })
          .catch((error) => {
            if (error.name === 'NotFoundError') {
              response.status(404).send({ message: error.message });
            } else {
              response.status(400).send({ message: error.message });
            }
          });
      });
  }
}
