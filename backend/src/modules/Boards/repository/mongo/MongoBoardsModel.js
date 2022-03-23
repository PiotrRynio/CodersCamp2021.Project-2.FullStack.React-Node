import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
  id: { type: String },
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
  avatarUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  authorFirstName: {
    type: String,
  },

  authorLastName: {
    type: String,
  },

  announcements: [{ type: mongoose.Schema.Types.ObjectId }],
});

export const MongoBoardsModel = mongoose.model('BoardSchema', BoardSchema, 'boards');
