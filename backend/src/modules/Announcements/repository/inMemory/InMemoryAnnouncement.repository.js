import { NotFoundError } from '../../../../utils/NotFoundError.js';

export class InMemoryAnnouncementRepository {
  constructor() {
    this.entities = {};
  }

  async addAnnouncement(newAnnouncement) {
    this.entities[newAnnouncement.id] = newAnnouncement;
    return this.entities[newAnnouncement.id];
  }

  async findOne(announcementId) {
    const announcement = this.entities[announcementId];

    if (!announcement) {
      throw new NotFoundError('Announcement');
    }
    return announcement;
  }
}
