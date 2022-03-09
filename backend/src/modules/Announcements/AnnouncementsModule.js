import { MongoAnnouncementsRepository } from './repository/mongo/MongoAnnouncement.repository.js';
import { AnnouncementsService } from './service/Announcements.service.js';
import { AnnouncementsController } from './controller/Announcements.controller.js';
import { InMemoryAnnouncementRepository } from './repository/inMemory/InMemoryAnnouncement.repository.js';

export const announcementsModule = (moduleRepositoryType, boardsService) => {
  const announcementRepository = (repositoryType) => {
    if (repositoryType === 'MONGO') {
      return new MongoAnnouncementsRepository();
    }
    return new InMemoryAnnouncementRepository();
  };

  const repository = announcementRepository(moduleRepositoryType);
  const service = new AnnouncementsService(repository, boardsService);
  const controller = new AnnouncementsController(service);

  return [controller, service, repository];
};
