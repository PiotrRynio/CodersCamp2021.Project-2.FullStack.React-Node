import { AnnouncementsRepository } from '../repository/mongo/Announcement.repository.js';
import Announcement from './Announcement.js';

export class AnnouncementsService {
  static async addNewAnnouncement(announcementData, boardId) {
    // TODO: Sprawdzić czy board istnieje get Boards/Id
    console.log(announcementData);

    const newAnnouncement = new Announcement(announcementData);

    const createdAnnouncement = await AnnouncementsRepository.addNewAnnouncement(newAnnouncement);

    // TODO: Dodać Id announcementu do boarda

    // TODO: Zwrócić listę announcementów tego boarda po dodaniu zamiast tego niżej
    return createdAnnouncement;
  }
}
