import mongoose from 'mongoose';
import { UserRegistration } from '../../service/UserRegistration.js';

export class MongoUsersRepository {
  constructor() {}

  async findUserByEmail(email) {
    const foundUser = await MongoUser.findOne({ email: email });
    if (!foundUser) {
      return;
    }

    return mongoDocumentToDomain(foundUser);
  }

  async findUserById(userId) {
    const foundUser = await MongoUser.findById(userId);
    if (!foundUser) {
      return;
    }
    return mongoDocumentToDomain(foundUser);
  }

  async createNewUser(userRegistrationDetails) {
    const createdUser = await MongoUser.create(userRegistrationDetails);
    return createdUser;
  }
}

const usersSchema = new mongoose.Schema({
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
  avatarUrl: {
    type: String,
  },

  subscribedBoards: [{ type: mongoose.Schema.Types.ObjectId }],
});

const MongoUser = mongoose.model('users', usersSchema);

function mongoDocumentToDomain(mongoDocument) {
  return new UserRegistration({
    userId: mongoDocument._id.toString(),
    firstName: mongoDocument.firstName,
    lastName: mongoDocument.lastName,
    email: mongoDocument.email,
    password: mongoDocument.password,
    subscribedBoards: mongoDocument.subscribedBoards,
  });
}
