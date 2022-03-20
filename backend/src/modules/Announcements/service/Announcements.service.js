import Announcement from './Announcement.js';
import { NotFoundError } from '../../../utils/NotFoundError.js';

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
    const announcement = await this.repository.findOneByAnnouncementId(announcementId);
    if (!announcement) {
      throw new NotFoundError('Announcement');
    }
    return announcement;
  }

  async findBoardAnnouncements(boardId) {
    const announcementsIds = this.boardsService.getAnnouncementsIds(boardId);
    return await this.getAnnouncementsByIds(announcementsIds);
  }

  async getAnnouncementsByIds(announcementsIds) {
    const returnedAnnouncements = [];
    for (const announcementId of announcementsIds) {
      const announcement = await this.repository.findOneByAnnouncementId(announcementId);
      if (!announcement) {
        throw new NotFoundError('Announcement');
      }
      returnedAnnouncements.push(announcement);
    }
    return returnedAnnouncements;
  }

  async deleteAnnouncement(announcementId) {
    const deletedAnnouncement = this.repository.deleteOneByAnnouncementId(announcementId);
    if (!deletedAnnouncement) {
      throw new NotFoundError('Announcement');
    }
    this.boardsService.deleteAnnouncementId(announcementId);
    return deletedAnnouncement;
  }

  async updateAnnouncement(announcementId, announcementData) {
    const updatedAnnouncement = new Announcement(announcementData);
    if (!updatedAnnouncement) {
      throw new NotFoundError('Announcement');
    }
    return this.repository.updateOneByAnnouncementId(announcementId, updatedAnnouncement);
  }
}
