export class InMemoryAnnouncementRepository {
  constructor() {
    this.entities = {};
  }

  async addAnnouncement(newAnnouncement) {
    this.entities[newAnnouncement.id] = newAnnouncement;
    return this.entities[newAnnouncement.id];
  }
}
