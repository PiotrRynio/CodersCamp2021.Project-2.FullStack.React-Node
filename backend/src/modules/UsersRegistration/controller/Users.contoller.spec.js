import { agent } from 'supertest';
import { UsersController } from './Users.controller.js';
import { testApi } from '../../../testsUtils/testApi.js';

describe('UsersController |', () => {
  const postCreateUserRegistrationRequestBody = {
    firstName: 'Adam',
    lastName: 'Nowak',
    email: 'adamNowak@test.com',
    password: 'admin123',
  };

  test('POST /rest-api/sign-up | when return users email', async () => {
    // GIVEN
    const testService = {
      signUp: async (postCreateUserRegistrationRequestBody) =>
        postCreateUserRegistrationRequestBody.email,
    };
    const usersRegistrationController = new UsersController(testService);
    const app = testApi('/rest-api', usersRegistrationController.router);

    // WHEN
    const { body, status } = await agent(app)
      .post('/rest-api/sign-up')
      .send(postCreateUserRegistrationRequestBody);

    // THEN
    expect(status).toEqual(200);
    expect(body).toEqual({ email: postCreateUserRegistrationRequestBody.email });
  });
});
