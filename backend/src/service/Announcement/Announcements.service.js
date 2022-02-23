import Announcement from './Announcement.js';
import { AnnouncementsRepository } from '../../repository/Announcement/Announcement.repository.js';

export class AnnouncementsService {
  static async addNewAnnouncement(newAnnouncement, boardId) {
    // TODO: Sprawdzić czy board istnieje get Boards/Id

    await AnnouncementsRepository.addNewAnnouncement(newAnnouncement);

    // TODO: Dodać Id announcementu do boarda

    return { a: 'trololo' };
  }
}
