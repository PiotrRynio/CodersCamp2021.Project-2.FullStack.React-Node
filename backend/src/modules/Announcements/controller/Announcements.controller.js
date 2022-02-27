import { Router } from 'express';

export class AnnouncementsController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router.route('/boards/:id/announcements').post((request, response) => {
      const id = request.params.id;
      this.service
        .addAnnouncement(request.body, id)
        .then((announcements) => {
          const returnedData = { announcements: announcements };
          response.status(200).send(returnedData);
        })
        .catch((error) => {
          response.status(400).send({ message: error.message });
        });
    });
  }
}
