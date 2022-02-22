import { Router } from 'express';
import { UserRegistrationDetailsService } from '../../service/UserRegistrationDetails/UserRegistrationDetails.service.js';
import { UserRegistrationDetails } from '../../service/UserRegistrationDetails/UserRegistrationDetails.js';

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
      .then((data) => {
        response.status(200).send(data);
      })
      .catch((error) => {
        response.status(400).send({ message: error.message });
      });
  });

  return router;
}
