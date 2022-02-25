import { AnnouncementsRepository } from '../../repository/Announcement/Announcement.repository.js';

export class AnnouncementsService {
  static async addNewAnnouncement(newAnnouncement, boardId) {
    // TODO: Sprawdzić czy board istnieje get Boards/Id

    const createdAnnouncement = await AnnouncementsRepository.addNewAnnouncement(newAnnouncement);

    // TODO: Dodać Id announcementu do boarda

    // TODO: Zwrócić listę announcementów tego boarda po dodaniu zamiast tego niżej
    return createdAnnouncement;
  }
}
