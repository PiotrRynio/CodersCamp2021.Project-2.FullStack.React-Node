import { HelloWorldRepository } from '../../repository/HelloWorld/HelloWorld.repository.js';
import helloWorldValidationSchema from './helloWorldValidationSchema.js';

export class HelloWorldService {
  static async getHelloWorld(req, res) {
    await HelloWorldRepository.findAll({}, (err, doc) => doc).then((doc) =>
      res.status(200).json(doc),
    );
  }

  static async postHelloWorld(helloWorldName) {
    throw new Error('nasz error');

    const hello = { name: req.body.name };

    res.status(200).json(hello);
  }
}
