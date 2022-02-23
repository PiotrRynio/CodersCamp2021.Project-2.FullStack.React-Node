import mongoose from 'mongoose';
import { UserRegistrationDetails } from '../../service/UserRegistrationDetails/UserRegistrationDetails.js';

export class UserRegistrationDetailRepository {
  constructor() {}
  async findUser(email) {
    const mongoFindResult = await MongoUserRegistrationDetails.find({
      email: email,
    });

    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }

  async createNewUser(userRegistrationDetails) {
    await MongoUserRegistrationDetails.create(userRegistrationDetails);
  }
}

const userRegistrationDetailsSchema = new mongoose.Schema({
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
  'userRegistrationDetails',
  userRegistrationDetailsSchema,
);

function mongoDocumentToDomain(mongoDocument) {
  return new UserRegistrationDetails({
    userId: mongoDocument._id.toString(),
    firstName: mongoDocument.firstName,
    lastName: mongoDocument.lastName,
    email: mongoDocument.email,
    password: mongoDocument.password,
  });
}
