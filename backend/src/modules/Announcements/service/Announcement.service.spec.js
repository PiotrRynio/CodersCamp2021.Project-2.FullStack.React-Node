import { jest } from '@jest/globals';
import { InMemoryAnnouncementRepository } from '../repository/inMemory/InMemoryAnnouncement.repository.js';
import { AnnouncementsService } from './Announcements.service.js';

describe('AnnouncementService |', () => {
  const correctAnnouncementData = {
    id: 'f47d448e-1209-4706-a341-d0cbc04155f6',
    title: 'Brak wody',
    boardName: 'Sobótka',
    content: 'Nie będzie wody tego i tego dnia, tra la la.',
  };

  const announcementDataWithoutContent = {
    title: 'Brak wody',
    boardName: 'Sobótka',
  };

  const announcementDataWithToShortTitle = {
    title: 'lol',
    boardName: 'Sobótka',
    content: 'Nie będzie wody tego i tego dnia, tra la la.',
  };

  const boardId = '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1';

  test('when correct announcement is added, then board announcements is returned', async () => {
    //Given
    const expectedId = 'f47d448e-1209-4706-a341-d0cbc04155f6';
    const expectedDate = Date.now();
    jest.spyOn(global.Date, 'now').mockReturnValue(expectedDate);
    const inMemoryAnnouncementRepository = new InMemoryAnnouncementRepository();
    const announcementService = new AnnouncementsService(inMemoryAnnouncementRepository);

    //When
    const boardAnnouncements = await announcementService.addAnnouncement(
      correctAnnouncementData,
      boardId,
    );

    //Then
    expect(Array.isArray(boardAnnouncements)).toBeTruthy();
    expect(boardAnnouncements[0]).toEqual({
      ...correctAnnouncementData,
      id: expectedId,
      date: expectedDate,
      iconType: 'default',
      commentsIds: [],
    });
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
