import { agent } from 'supertest';
import { UsersRegistrationController } from './UsersRegistration.controller.js';
import { testApi } from '../../../testsUtils/testApi.js';

describe('UsersRegistrationController |', () => {
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
    const usersRegistrationController = new UsersRegistrationController(testService);
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
