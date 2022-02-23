import { Router } from 'express';
import { router } from 'express/lib/application.js';
import {
  UserRegistrationDetails
} from "../../service/UserRegistrationDetails/UserRegistrationDetails.js";

export class UserRegistrationDetailsController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    router.route('/sign-up').post((request, response) => {
      this.service
        .signUp(
          new UserRegistrationDetails({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: request.body.password,
          }),
        )
        .then((email) => {
          const returnedData = { email: email };
          response.status(200).send(returnedData);
        })
        .catch((error) => {
          response.status(400).send({ message: error.message });
        });
    });
  }

  async router() {
    return this.router;
  }
}
