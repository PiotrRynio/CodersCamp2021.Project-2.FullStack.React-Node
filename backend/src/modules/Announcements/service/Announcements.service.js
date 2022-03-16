import Announcement from './Announcement.js';

export class AnnouncementsService {
  constructor(repository, boardsService) {
    this.repository = repository;
    this.boardsService = boardsService;
  }

  async addAnnouncement(announcementData, boardId) {
    const boardAnnouncementsIds = this.boardsService.getAnnouncementsIds(boardId);

    const newAnnouncement = new Announcement(announcementData);
    const createdAnnouncement = await this.repository.addAnnouncement(newAnnouncement);
    this.boardsService.addAnnouncementId(boardId, createdAnnouncement.id);

    return this.getAnnouncementsByIds([...boardAnnouncementsIds, createdAnnouncement.id]);
  }

  async findAnnouncement(announcementId) {
    return await this.repository.findOneByAnnouncementId(announcementId);
  }

  async findBoardAnnouncements(boardId) {
    const announcementsIds = this.boardsService.getAnnouncementsIds(boardId);
    return await this.getAnnouncementsByIds(announcementsIds);
  }

  async getAnnouncementsByIds(announcementsIds) {
    const returnedAnnouncements = [];
    announcementsIds.forEach(async (announcementId) => {
      const announcement = await this.repository.findOneByAnnouncementId(announcementId);
      returnedAnnouncements.push(announcement);
    });
    return returnedAnnouncements;
  }

  async deleteAnnouncement(announcementId) {
    const deletedAnnouncement = this.repository.deleteOneByAnnouncementId(announcementId);
    this.boardsService.deleteAnnouncementId(announcementId);
    return deletedAnnouncement;
  }

  async updateAnnouncement(announcementId, announcementData) {
    const updatedAnnouncement = new Announcement(announcementData);

    const newAnnouncement = this.repository.updateOneByAnnouncementId(
      announcementId,
      updatedAnnouncement,
    );

    return newAnnouncement;
  }
}
