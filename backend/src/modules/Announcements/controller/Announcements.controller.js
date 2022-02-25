import { Router } from 'express';

export class AnnouncementsController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router.route('/boards/:id/announcements').post((request, response) => {
      const id = request.params.id;
      this.service
        .addAnnouncement(request.body, id)
        .then((announcement) => {
          const returnedData = { announcement: announcement };
          response.status(200).send(returnedData);
        })
        .catch((error) => {
          console.log(error);
          response.status(400).send({ message: error.message });
        });
    });
  }
}
