import { Router } from 'express';
import { SignUpUser } from '../../service/Users/signUp.service.js';

export function signUp() {
  const router = Router();

  router.route('/sign-up').post(SignUpUser.postSignUp);

  return router;
}
