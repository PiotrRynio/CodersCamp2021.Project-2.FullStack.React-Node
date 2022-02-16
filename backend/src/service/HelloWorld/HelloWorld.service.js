// const Note = require('../../db/models/Note');
// import Note from '../../db/models/Note'
// import { HelloWorld } from "./HelloWorld.js";
import { HelloWorldRepository } from '../../repository/HelloWorld/HelloWorld.repository.js';

export class HelloWorldService {
  constructor() {}

  async getHelloWorld(req, res) {
    console.log('hej');

    await HelloWorldRepository.findAll({}, (err, doc) => doc)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ message: `Server error: ${err}` }));
  }
}
