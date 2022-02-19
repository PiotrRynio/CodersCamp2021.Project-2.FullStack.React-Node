import mongoose from 'mongoose';
import { HelloWorld } from '../../service/HelloWorld/HelloWorld.js';
const { Schema } = mongoose;

export class HelloWorldRepository {
  static async findAll() {
    const mongoFindResult = await MongoHelloWorld.find();
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
    helloWorldId: mongoDocument._id,
    helloWorldText: mongoDocument.helloWorldText,
  });
}
