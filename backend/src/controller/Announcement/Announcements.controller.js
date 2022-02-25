import { Router } from 'express';
import { AnnouncementsService } from '../../service/Announcement/Announcements.service.js';
import Announcement from '../../service/Announcement/Announcement.js';
import { announcementValidation } from './AnnouncementValidation.js';

export function announcementsController() {
  const router = Router();
  router.use(announcementValidation);
  router.route('/boards/:id/announcements').post((request, response) => {
    const id = request.params.id;
    AnnouncementsService.addNewAnnouncement(new Announcement(request.body), id)
      .then((announcement) => {
        const returnedData = { announcement: announcement };
        response.status(200).send(returnedData);
      })
      .catch((error) => {
        console.log(error);
        response.status(400).send({ message: error.message });
      });
  });

  return router;
}
