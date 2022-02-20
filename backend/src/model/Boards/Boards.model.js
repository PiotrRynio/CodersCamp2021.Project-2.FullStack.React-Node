import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: true,
  },
  coords: {
    type: Object,
    required: true,
  },
  accessType: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: '',
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  avatar: String,
  announcements: [{ type: mongoose.Schema.Types.ObjectId }],
});

export const BoardsModel = mongoose.model('BoardSchema', BoardSchema, 'boards');
