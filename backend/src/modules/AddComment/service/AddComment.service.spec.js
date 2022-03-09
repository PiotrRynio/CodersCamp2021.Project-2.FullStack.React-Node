import { InMemoryCommentRepository } from '../repository/inMemory/inMemoryAddComment.repository.js';
import { AddCommentService } from './AddComment.service.js';
import { Comment } from './AddComment.js';
import {
  InMemoryAnnouncementRepository
} from "../../Announcements/repository/inMemory/InMemoryAnnouncement.repository.js";
import {AnnouncementsService} from "../../Announcements/service/Announcements.service.js";

describe('AddCommentRepository|', () => {
  const defaultComment = new Comment({
    userId: '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1',
    content: 'tresc komentarza',
    date: 'dzis',
  });

  test('When the correct comment is added return content of the comment', async () => {
    const inMemoryCommentRepository = new InMemoryCommentRepository();
    const addCommentService = new AddCommentService(inMemoryCommentRepository);

    const returnedContent = await addCommentService.addComment(defaultComment);

    expect(returnedContent).toBe(defaultComment.content);
  });
  test('when announcement data is not valid, then error is throw', async () => {
    //Given
    const inMemoryAnnouncementRepository = new InMemoryAnnouncementRepository();
    const announcementService = new AnnouncementsService(inMemoryAnnouncementRepository);

    //When
    const addAnnouncementWithoutContent = async () => {
      await announcementService.addAnnouncement(announcementDataWithoutContent, boardId);
    };

    const addAnnouncementWithToShortTitle = async () => {
      await announcementService.addAnnouncement(announcementDataWithToShortTitle, boardId);
    };

    //Then
    await expect(addAnnouncementWithoutContent).rejects.toThrowError();
    await expect(addAnnouncementWithToShortTitle).rejects.toThrowError();
  });
});
