import mongoose from 'mongoose';
import { UserRegistration } from '../../service/UserRegistration.js';

export class MongoUsersRepository {
  constructor() {}

  async findUser(email) {
    const mongoFindResult = await MongoUserRegistrationDetails.findOne({ email: email });
    if (!mongoFindResult) {
      return;
    }

    return mongoDocumentToDomain(mongoFindResult);
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

const MongoUserRegistrationDetails = mongoose.model('users', userRegistrationDetailsSchema);

function mongoDocumentToDomain(mongoDocument) {
  return new UserRegistration({
    userId: mongoDocument._id.toString(),
    firstName: mongoDocument.firstName,
    lastName: mongoDocument.lastName,
    email: mongoDocument.email,
    password: mongoDocument.password,
  });
}
