import express from 'express';
const router = express.Router();
import signUpTable from '../models/SignUpModels.js';
const signUpTemplateCopy = signUpTable;

const routesUrls = () => {
  router.post('/sign-up', (req, res) => {
    const singedUpUser = new signUpTemplateCopy({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    singedUpUser
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  });
};

export default routesUrls;
