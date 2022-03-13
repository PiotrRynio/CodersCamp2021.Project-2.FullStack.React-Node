import mongoose from 'mongoose';
import { UserRegistration } from '../../service/UserRegistration.js';

export class MongoUsersRegistrationRepository {
  constructor() {}

  async findUser(email) {
    const mongoFindResult = await MongoUserRegistrationDetails.find({
      email: email,
    });
    if (!mongoFindResult) {
      return {};
    }

    return mongoDocumentToDomain(mongoFindResult[0]);
  }

  async createNewUser(userRegistrationDetails) {
    const createdUser = await MongoUserRegistrationDetails.create(userRegistrationDetails);
    return createdUser;
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
  return new UserRegistration({
    userId: mongoDocument._id.toString(),
    firstName: mongoDocument.firstName,
    lastName: mongoDocument.lastName,
    email: mongoDocument.email,
    password: mongoDocument.password,
  });
}
