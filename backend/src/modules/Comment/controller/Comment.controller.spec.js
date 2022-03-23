import { agent } from 'supertest';
import { testApi } from '../../../testsUtils/testApi.js';
import { CommentController } from './Comment.controller.js';

describe('CommentController |', () => {
  const postCreateCommentRequestBody = {
    content: 'comment content',
    date: Date.now(),
  };

  test('POST /rest-api/borders/add-comment| when service throw error', async () => {
    const testService = {
      addComment: async () => {
        throw new Error('Error message');
      },
    };
    const addCommentController = new CommentController(testService);
    const app = testApi('/rest-api', addCommentController.router);

    const { body, status } = await agent(app)
      .post('/rest-api/add-comment')
      .send(postCreateCommentRequestBody);

    expect(status).toEqual(404);
  });
});
