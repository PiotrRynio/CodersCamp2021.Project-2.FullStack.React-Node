import Announcement from './Announcement.js';
import { AnnouncementsRepository } from '../../repository/Announcement/Announcement.repository.js';

export class AnnouncementsService {
  static async addNewAnnouncement(newAnnouncement) {
    console.log(newAnnouncement);
    await AnnouncementsRepository.addNewAnnouncement(newAnnouncement);

    return { a: 'trololo' };
  }
}
