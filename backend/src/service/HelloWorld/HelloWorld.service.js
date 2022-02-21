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

  static async postHelloWorld(helloWorldName) {
    console.log('1111111111');
    // const { error } = helloWorldValidationSchema.validate(helloWorldName };
    throw new Error('nasz error');

    // // console.log(error);
    // if (error) {
    //   // return res.status(400).send(error.details[0].message);
    //   //
    //   //
    //   // return { type: 'error', message: error.details[0].message };
    // }

    console.log('222222');
    const hello = { name: req.body.name };

    res.status(200).json(hello);
  }
}
