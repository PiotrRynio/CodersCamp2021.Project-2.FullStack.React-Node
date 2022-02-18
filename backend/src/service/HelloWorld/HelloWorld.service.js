// const Note = require('../../db/models/Note');
// import Note from '../../db/models/Note'
// import { HelloWorld } from "./HelloWorld.js";
import { HelloWorldRepository } from '../../repository/HelloWorld/HelloWorld.repository.js';
import helloWorldValidationSchema from './helloWorldValidationSchema.js';

export class HelloWorldService {
  constructor() {}

  async getHelloWorld(req, res) {
    console.log('hej');

    await HelloWorldRepository.findAll({}, (err, doc) => doc)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ message: `Server error: ${err}` }));
  }

  async postHelloWorld(req, res) {
    const { error } = helloWorldValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const hello = { name: req.body.name };

    res.status(200).json(hello);
  }
}
