import mongoose from 'mongoose';
import { AddComment } from '../../service/AddComment';
import { AddCommentService } from '../../service/AddComment.service';

export class MongoAddCommentRepository {
  constructor() {}

  async createNewComment(MongoAddCommentModel) {
    await MongoAddCommentModel.create(addCommentSchema);
  }
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

const mongoAddCommentModel = mongoose.model('addComment', addCommentSchema);
