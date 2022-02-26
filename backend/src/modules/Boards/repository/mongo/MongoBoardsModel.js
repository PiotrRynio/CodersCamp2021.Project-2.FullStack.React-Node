import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: true,
  },
  mapCoordinates: {
    type: Object,
    required: true,
  },
  accessType: {
    type: String,
    required: true,
  },
  adminId: {
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

export const MongoBoardsModel = mongoose.model('BoardSchema', BoardSchema, 'boards');
