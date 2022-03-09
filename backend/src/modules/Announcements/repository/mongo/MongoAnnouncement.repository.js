import mongoose from 'mongoose';
import Announcement from '../../service/Announcement.js';
import { NotFoundError } from '../../../../utils/NotFoundError.js';

export class MongoAnnouncementsRepository {
  async addAnnouncement(newAnnouncement) {
    const mongoAnnouncement = await MongoAnnouncements.create(newAnnouncement);
    return mongoDocumentToDomain(mongoAnnouncement);
  }

  async findOneByAnnouncementId(announcementId) {
    return await MongoAnnouncements.findById(announcementId).then((mongoAnnouncement) => {
      if (!mongoAnnouncement) {
        throw new NotFoundError('Announcement');
      }
      return mongoDocumentToDomain(mongoAnnouncement);
    });
  }

  async deleteOneByAnnouncementId(announcementId) {
    return await MongoAnnouncements.findByIdAndDelete(announcementId).then((mongoAnnouncement) => {
      if (!mongoAnnouncement) {
        throw new NotFoundError('Announcement');
      }
      return mongoDocumentToDomain(mongoAnnouncement);
    });
  }

  async updateOneByAnnouncementId(announcementId, updatedAnnouncement) {
    const mongoAnnouncement = await MongoAnnouncements.findByIdAndUpdate(
      announcementId,
      updatedAnnouncement,
    );
    return mongoDocumentToDomain(mongoAnnouncement);
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

const MongoAnnouncements = mongoose.model('Announcements', announcementSchema);

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
