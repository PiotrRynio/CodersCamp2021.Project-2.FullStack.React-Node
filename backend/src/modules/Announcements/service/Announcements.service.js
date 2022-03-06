import Announcement from './Announcement.js';

export class AnnouncementsService {
  constructor(repository, boardsService) {
    this.repository = repository;
    this.boardsService = boardsService;
  }
  async addAnnouncement(announcementData, boardId) {
    // TODO: Sprawdzić czy board istnieje get Boards/Id
    const newAnnouncement = new Announcement(announcementData);

    const createdAnnouncement = await this.repository.addAnnouncement(newAnnouncement);

    // TODO: Dodać Id announcementu do boarda

    // TODO: Zwrócić listę announcementów tego boarda po dodaniu zamiast tego niżej
    return [createdAnnouncement];
  }

  async findAnnouncement(announcementId) {
    return await this.repository.findOneByAnnouncementId(announcementId);
  }

  async findBoardAnnouncements(boardId) {
    const announcementsIds = this.boardsService.getAnnouncementsIds(boardId);
    return await announcementsIds.map(
      async (announcementId) => await this.repository.findOneByAnnouncementId(announcementId),
    );
  }
}
