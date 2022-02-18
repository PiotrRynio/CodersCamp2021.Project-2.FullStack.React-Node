import mongoose from 'mongoose';
import { HelloWorld } from '../../service/HelloWorld/HelloWorld.js';
const { Schema } = mongoose;

export class HelloWorldRepository {
  // eslint-disable-next-line class-methods-use-this
  static async findAll() {
    // eslint-disable-next-line no-use-before-define
    const mongoFindResult = await MongoHelloWorld.find({});
    console.log(mongoFindResult);
    // eslint-disable-next-line no-use-before-define
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }
}

const HelloWorldSchema = new mongoose.Schema({
  _id: Schema.Types.String,
  text: Schema.Types.String,
});

const MongoHelloWorld = mongoose.model('HelloWorldSchema', HelloWorldSchema, 'hello-world');

function mongoDocumentToDomain(mongoDocument) {
  return new HelloWorld({
    // eslint-disable-next-line no-underscore-dangle
    helloWorldId: mongoDocument._id,
    helloWorldText: mongoDocument.text,
  });
}
