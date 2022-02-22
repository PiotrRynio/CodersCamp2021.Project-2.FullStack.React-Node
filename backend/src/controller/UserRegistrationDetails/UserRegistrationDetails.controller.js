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
      .then((email) => {
        const returnedData = { email: email };
        response.status(200).send(returnedData);
      })
      .catch((error) => {
        response.status(400).send({ message: error.message });
      });
  });

  return router;
}
