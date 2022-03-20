export class InMemoryAnnouncementRepository {
  constructor() {
    this.entities = {};
  }

  async addAnnouncement(newAnnouncement) {
    this.entities[newAnnouncement.id] = newAnnouncement;
    return this.entities[newAnnouncement.id];
  }

  async findOneByAnnouncementId(announcementId) {
    const announcement = this.entities[announcementId];

    if (!announcement) {
      return;
    }
    return announcement;
  }

  async deleteOneByAnnouncementId(announcementId) {
    const announcement = this.entities[announcementId];

    if (!announcement) {
      return;
    }
    delete this.entities[announcementId];
    return announcement;
  }

  async updateOneByAnnouncementId(announcementId, newAnnouncementBody) {
    const announcement = this.entities[announcementId];

    if (!announcement) {
      return;
    }
    const updatedAnnouncement = {
      ...announcement,
      ...newAnnouncementBody,
      id: announcement.id,
    };
    this.entities[updatedAnnouncement.id] = updatedAnnouncement;
    return this.entities[updatedAnnouncement.id];
  }
}
