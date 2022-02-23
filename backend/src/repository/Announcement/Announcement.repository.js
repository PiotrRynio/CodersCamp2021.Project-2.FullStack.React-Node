import { Schema, model } from 'mongoose';
import Announcement from '../../service/Announcement/Announcement.js';

export class AnnouncementsRepository {
  static async addNewAnnouncement(newAnnouncement) {
    await MongoAnnouncements.create(newAnnouncement);
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

const MongoAnnouncements = model('AnnouncementSchema', announcementSchema);

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
