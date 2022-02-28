import { agent } from 'supertest';
import { testApi } from '../../../testsUtils/testApi.js';
import { CommentController } from './AddComment.controller.js';

describe('CommentController |', () => {
  const postCreateCommentRequestBody = {
    board: 'tablica',
    content: 'tresc komentarza',
  };

  test('POST /rest-api/add-comment | when returns comment content', async () => {
    const testService = {
      addComment: async (postCreateCommentRequestBody) => postCreateCommentRequestBody.content,
    };

    const addCommentController = new CommentController(testService);
    const app = testApi('/rest-api', addCommentController.router);

    const { body, status } = await agent(app)
      .post('/rest-api/add-comment')
      .send(postCreateCommentRequestBody);

    expect(status).toEqual(200);
    expect(body).toEqual({ content: postCreateCommentRequestBody.content });
  });
});
