import mongoose from 'mongoose';
import Announcement from '../../service/Announcement/Announcement.js';

export class AnnouncementsRepository {
  static async addNewAnnouncement(newAnnouncement) {
    return await MongoAnnouncements.create(newAnnouncement).then((createdAnnouncement) => {
      const addedAnnouncement = mongoDocumentToDomain(createdAnnouncement);
      return addedAnnouncement;
    });
  }
}

const announcementSchema = new mongoose.Schema({
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
  comments: [{ type: mongoose.Schema.Types.ObjectId }],
  date: { type: Date, default: Date.now() },
});

const MongoAnnouncements = mongoose.model('AnnouncementSchema', announcementSchema);

function mongoDocumentToDomain(mongoDocument) {
  const announcement = {
    id: mongoDocument._id.toString(),
    title: mongoDocument.title,
    boardName: mongoDocument.boardName,
    content: mongoDocument.content,
    comments: mongoDocument.comments,
    date: mongoDocument.date,
  };
  return new Announcement(announcement);
}
