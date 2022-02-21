import { MongoSingUp } from '../../repository/User/SignUpModels.repository.js';

export class SignUpUser {
  static async postSignUp(req, res) {
    const singedUpUser = new MongoSingUp({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    singedUpUser
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  }
}
