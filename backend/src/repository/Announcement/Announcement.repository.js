import { Schema, model } from 'mongoose';
import Announcement from '../../service/Announcement/Announcement.js';

export class HelloWorldRepository {
  static async findAll() {
    const mongoFindResult = await MongoAnnouncement.find();
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }
}

const announcementSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  boardName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 20,
    maxlength: 300,
  },
  comments: [{ type: Schema.Types.ObjectId }],
  date: { type: Date, default: Date.now() },
});

const MongoAnnouncement = model('AnnouncementSchema', announcementSchema);

function mongoDocumentToDomain(mongoDocument) {
  const announcement = {
    id: mongoDocument._id,
    title: mongoDocument.title,
    boardName: mongoDocument.boardName,
    content: mongoDocument.content,
    comments: mongoDocument.comments,
    date: mongoDocument.date,
  };
  return new Announcement(announcement);
}
