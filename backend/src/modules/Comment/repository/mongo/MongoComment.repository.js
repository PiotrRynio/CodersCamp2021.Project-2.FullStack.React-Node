import mongoose from 'mongoose';
import { Comment } from '../../service/Comment.js';

export class MongoCommentRepository {
  constructor() {}

  async createNewComment(commentDetails) {
    const newComment = await MongoCommentDetails.create(commentDetails);
    return mongoDocumentToDomain(newComment);
  }

  async findOneByCommentId(commentId) {
    return await MongoCommentDetails.findById(commentId).then((mongoComment) => {
      if (!mongoComment) {
        return;
      }
      return mongoDocumentToDomain(mongoComment);
    });
  }
}

const commentSchema = new mongoose.Schema({
  userId: {
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
  author: {
    type: Object,
  },
});

const MongoCommentDetails = mongoose.model('Comments', commentSchema);

function mongoDocumentToDomain(mongoDocument) {
  const comment = {
    id: mongoDocument._id.toString(),
    content: mongoDocument.content,
    date: mongoDocument.date,
    userId: mongoDocument.userId,
  };
  return new Comment(comment);
}
