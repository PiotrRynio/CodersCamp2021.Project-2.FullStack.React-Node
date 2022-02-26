import Announcement from './Announcement.js';

export class AnnouncementsService {
  constructor(repository) {
    this.repository = repository;
  }
  async addAnnouncement(announcementData, boardId) {
    // TODO: Sprawdzić czy board istnieje get Boards/Id
    const newAnnouncement = new Announcement(announcementData);

    const createdAnnouncement = await this.repository.addAnnouncement(newAnnouncement);

    // TODO: Dodać Id announcementu do boarda

    // TODO: Zwrócić listę announcementów tego boarda po dodaniu zamiast tego niżej
    return [createdAnnouncement];
  }
}
