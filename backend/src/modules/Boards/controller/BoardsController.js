import { Router } from 'express';
import { Board } from '../service/Board.js';

export class BoardsController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router.route('/boards').post((request, response) => {
      this.service
        .addBoard(
          new Board({
            boardName: request.body.boardName,
            mapCoordinates: request.body.mapCoordinates,
            accessType: request.body.accessType,
            adminId: request.body.adminId,
            dateCreated: request.body.dateCreated,
            description: request.body.description,
            avatarUrl: request.body.avatarUrl,
            announcements: [],
          }),
        )
        .then((returnedData) => {
          response.status(200).send({ returnedData });
        })
        .catch((error) => {
          response.status(400).send({ message: error.message });
        });
    });
  }
}
