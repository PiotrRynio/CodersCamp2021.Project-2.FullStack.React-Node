import { InMemoryUsersRegistrationRepository } from '../repository/inMemory/InMemoryUsersRegistration.repository.js';
import { UserRegistrationService } from './UserRegistration.service.js';
import { UserRegistration } from './UserRegistration.js';

describe('UsersRegistrationRepository |', () => {
  const defaultUserRegistration = new UserRegistration({
    userId: '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1',
    firstName: 'Adam',
    lastName: 'Nowak',
    email: 'adamNowak@test.com',
    password: 'admin123',
  });

  test('when correct user is being signed up, then email is returned', async () => {
    //Given
    const inMemoryUsersRegistrationRepository = new InMemoryUsersRegistrationRepository();
    const userRegistrationDetailsService = new UserRegistrationService(
      inMemoryUsersRegistrationRepository,
    );

    //When
    const returnedEmail = await userRegistrationDetailsService.signUp(defaultUserRegistration);

    //Then
    expect(returnedEmail).toBe(defaultUserRegistration.email);
  });
});
