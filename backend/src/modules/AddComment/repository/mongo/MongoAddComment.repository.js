import mongoose from 'mongoose';

export class MongoCommentRepository {
  constructor() {}

  async createNewComment(commentDetails) {
    await MongoCommentDetails.create(commentDetails);
  }
}

const commentSchema = new mongoose.Schema({
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

const MongoCommentDetails = mongoose.model('addComment', commentSchema);
