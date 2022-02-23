import { Router } from 'express';
import { initialize } from '../../../passport-config.js';
import passport from 'passport';
import { UserRegistrationDetailsService } from '../../service/UserRegistrationDetails/UserRegistrationDetails.service.js';
import { UserRegistrationDetails } from '../../service/UserRegistrationDetails/UserRegistrationDetails.js';


const initializePassport = initialize;
initializePassport(
  passport,
  (email) =>
    registeredUserRegistrationDetails.find(
      (UserRegistrationDetailsService) => UserRegistrationDetailsService.email === email,
    ),
  (id) =>
    registeredUserRegistrationDetails.find(
      (UserRegistrationDetailsService) => UserRegistrationDetailsService.id === id,
    ),
);

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

export function userRegistrationDetailsController() {
  const router = Router();
  router.route('/sign-up').post((request, response) => {
    UserRegistrationDetailsService.signUp(
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

  router.route('/login').post(
    checkNotAuthenticated,
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    }),
  );

  return router;
}
