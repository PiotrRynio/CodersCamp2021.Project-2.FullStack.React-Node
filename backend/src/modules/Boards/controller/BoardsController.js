import { Router } from 'express';
import { Board } from '../service/Board.js';

export class BoardsController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router.route('/boards').post((request, response) => {
      //console.log(request.body);
      this.service
        .addBoard(
          new Board({
            boardName: request.body.boardName,
            coords: request.body.coords,
            accessType: request.body.accessType,
            adminId: request.body.adminId,
            dateCreated: request.body.dateCreated,
            announcements: [],
          }),
        )
        .then((returnedData) => {
          response.status(200).send({ returnedData });
        })
        .catch((error) => {
          console.log('error catch');
          response.status(400).send({ message: error.message });
        });
    });
  }
}
