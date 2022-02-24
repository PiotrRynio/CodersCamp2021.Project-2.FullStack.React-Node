import { Router } from 'express';
import passport from 'passport';
import { UserRegistration } from '../service/UserRegistration.js';


function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

export class UsersRegistrationController {
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

    this.router.route('/log-in').post(
      checkNotAuthenticated,
      passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
      }),
    );
  }


  async router() {
    return this.router;
  }
}
