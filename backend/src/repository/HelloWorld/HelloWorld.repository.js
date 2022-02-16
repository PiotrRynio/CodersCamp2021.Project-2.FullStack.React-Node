import mongoose from 'mongoose';
import { HelloWorld } from '../../service/HelloWorld/HelloWorld.js';
const { Schema } = mongoose;

// eslint-disable-next-line import/prefer-default-export
export class HelloWorldRepository {
  // eslint-disable-next-line class-methods-use-this
  static async findAll() {
    console.log('jestesmy w find all ');
    return 'HELLO WORLD';

    // eslint-disable-next-line no-use-before-define
    const mongoFindResult = await MongoHelloWorld.find({});
    // eslint-disable-next-line no-use-before-define
    console.log('jestesmy na koncu ');
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }
}

const HelloWorldSchema = new mongoose.Schema({
  _id: Schema.Types.String,
  helloWorldText: Schema.Types.String,
});

const MongoHelloWorld = mongoose.model('HelloWorldSchema', HelloWorldSchema);

function mongoDocumentToDomain(mongoDocument) {
  return new HelloWorld({
    // eslint-disable-next-line no-underscore-dangle
    helloWorldId: mongoDocument._id,
    helloWorldText: mongoDocument.helloWorldText,
  });
}
