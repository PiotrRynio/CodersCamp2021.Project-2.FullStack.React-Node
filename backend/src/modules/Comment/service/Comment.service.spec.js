import { InMemoryCommentRepository } from '../repository/inMemory/inMemoryComment.repository.js';
import { CommentService } from './Comment.service.js';
import { Comment } from './Comment.js';

describe('AddCommentRepository|', () => {
  const defaultComment = new Comment({
    userId: '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1',
    content: 'tresc komentarza',
    date: Date.now(),
  });

  const commentWithoutContent = {
    userId: '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1',
    date: Date.now(),
  };

  test('when comment data is not valid then throw error', async () => {
    const inMemoryCommentRepository = new InMemoryCommentRepository();
    const addCommentService = new CommentService(inMemoryCommentRepository);

    const addCommentWithoutContent = async () => {
      await addCommentService.addComment(commentWithoutContent);
    };

    await expect(addCommentWithoutContent).rejects.toThrowError();
  });
});
