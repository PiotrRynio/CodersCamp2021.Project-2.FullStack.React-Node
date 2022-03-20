import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { UserRegistration } from '../service/UserRegistration.js';
import { UserLogIn } from '../service/UserLogIn.js';

export class UsersController {
  constructor(service) {
    this.service = service;
    this.router = Router();

    this.router.route('/sign-up').post((request, response) => {
      this.service
        .signUp(
          new UserRegistration({
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

    this.router.route('/log-in').post((request, response) => {
      this.service
        .logIn(
          new UserLogIn({
            email: request.body.email,
            password: request.body.password,
          }),
        )
        .then((email) => {
          const returnedData = { email: email };
          const payload = returnedData;
          const token = jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: 1200 });
          response.header('auth-token', token).status(200).send(email);
        })
        .catch((error) => {
          console.log(error);
          response.status(400).send({ message: error.message });
        });
    });
  }
}
