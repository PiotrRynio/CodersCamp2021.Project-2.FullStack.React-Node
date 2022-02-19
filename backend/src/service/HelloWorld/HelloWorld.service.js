import { HelloWorldRepository } from '../../repository/HelloWorld/HelloWorld.repository.js';
import helloWorldValidationSchema from './helloWorldValidationSchema.js';

export class HelloWorldService {
  static async getHelloWorld(req, res) {
    await HelloWorldRepository.findAll({}, (err, doc) => doc).then((doc) =>
      res.status(200).json(doc),
    );
    // TODO: Czy to nie będzie dla Nas zawsze true?
    // TODO: .catch((err) => res.status(500).json({ message: `Server error: ${err}` }));
  }

  static async postHelloWorld(req, res) {
    const { error } = helloWorldValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const hello = { name: req.body.name };

    res.status(200).json(hello);
  }
}
