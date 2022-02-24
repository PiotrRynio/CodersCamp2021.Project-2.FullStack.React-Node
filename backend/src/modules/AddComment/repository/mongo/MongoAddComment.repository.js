import mongoose from 'mongoose';
import { AddComment } from '../../service/AddComment';
import { AddCommentService } from '../../service/AddComment.service';

export class MongoAddCommentRepository {
  constructor() {}

  //TODO
}

const addCommentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const MongoAddComment = mongoose.model('addComment', addCommentSchema);

function mongoDocumentToDomain(mongoDocument) {
  return new AddComment({
    userId: mongoDocument._id.toString(),
    board: mongoDocument.firstName,
    content: mongoDocument.lastName,
  });
}
