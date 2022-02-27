import mongoose from 'mongoose';
import Announcement from '../../service/Announcement.js';

export class MongoAnnouncementsRepository {
  async addAnnouncement(newAnnouncement) {
    return await MongoAnnouncements.create(newAnnouncement).then((createdAnnouncement) => {
      return mongoDocumentToDomain(createdAnnouncement);
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
  iconType: {
    type: String,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 20,
    maxlength: 300,
  },
  commentsIds: [{ type: mongoose.Schema.Types.ObjectId }],
  date: { type: Date, default: Date.now() },
});

const MongoAnnouncements = mongoose.model('AnnouncementSchema', announcementSchema);

function mongoDocumentToDomain(mongoDocument) {
  const announcement = {
    id: mongoDocument._id.toString(),
    title: mongoDocument.title,
    boardName: mongoDocument.boardName,
    iconType: mongoDocument.iconType,
    content: mongoDocument.content,
    commentsIds: mongoDocument.commentsIds,
    date: mongoDocument.date,
  };
  return new Announcement(announcement);
}
