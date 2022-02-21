import mongoose from 'mongoose';
import { UserRegistrationDetails } from '../../service/Users/UserRegistrationDetails.js';

export class UserRegistrationDetailRepository {
  static async find(email) {
    const mongoFindResult = await MongoUserRegistrationDetails.find({
      email: email,
    });

    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }
}

const userRegistrationDetailsSchema = new mongoose.Schema({
  _id: String,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const MongoUserRegistrationDetails = mongoose.model(
  'UserRegistrationDetailsSchema',
  userRegistrationDetailsSchema,
);

function mongoDocumentToDomain(mongoDocument) {
  return new UserRegistrationDetails({
    userId: mongoDocument._id,
    firstName: mongoDocument.firstName,
    lastName: mongoDocument.lastName,
    email: mongoDocument.email,
    password: mongoDocument.password,
  });
}
