import { HelloWorldRepository } from '../../repository/HelloWorld/HelloWorld.repository.js';

export class HelloWorldService {
  static async getHelloWorld(req, res) {
    await HelloWorldRepository.findAll({}, (err, doc) => doc)
      .then((doc) => res.status(200).json(doc))
      .catch((err) => res.status(500).json({ message: `Server error: ${err}` }));
  }
}
