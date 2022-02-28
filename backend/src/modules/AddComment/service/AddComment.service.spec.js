import { InMemoryCommentRepository } from '../repository/inMemory/inMemoryAddComment.repository.js';
import { AddCommentService } from './AddComment.service.js';
import { Comment } from './AddComment.js';

describe('AddCommentRepository|', () => {
  const defaultComment = new Comment({
    userId: '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1',
    board: 'tablica',
    content: 'tresc komentarza',
    date: 'dzis',
  });

  test('When the correct comment is added return content of the comment', async () => {
    const inMemoryCommentRepository = new InMemoryCommentRepository();
    const addCommentService = new AddCommentService(inMemoryCommentRepository);

    const returnedContent = await addCommentService.addComment(defaultComment);

    expect(returnedContent).toBe(defaultComment.content);
  });
});
