import { MongoAnnouncementsRepository } from './repository/mongo/Announcement.repository.js';
import { AnnouncementsService } from './service/Announcements.service.js';
import { AnnouncementsController } from './controller/Announcements.controller.js';

export const announcementsModule = (moduleRepositoryType) => {
  const announcementRepository = (repositoryType) => {
    if (repositoryType === 'MONGO') {
      return new MongoAnnouncementsRepository();
    }
    // TODO: Dodać InMemoryAnnouncementRepository
  };

  const repository = announcementRepository(moduleRepositoryType);
  const service = new AnnouncementsService(repository);
  const controller = new AnnouncementsController(service);

  return controller.router;
};
