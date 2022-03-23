import { InMemoryUsersRepository } from '../repository/inMemory/InMemoryUsers.repository.js';
import { UsersService } from './Users.service.js';
import { UserRegistration } from './UserRegistration.js';

describe('UsersRegistrationRepository |', () => {
  const defaultUserRegistration = new UserRegistration({
    userId: '8a4a5d2d-af04-4f3a-87d1-ef8130f8bbb1',
    firstName: 'Adam',
    lastName: 'Nowak',
    email: 'adamNowak@test123.com',
    password: 'admin123',
    avatarUrl: 'sampleavatarpath',
  });

  test('when correct user is being signed up, then email is returned', async () => {
    //Given
    const inMemoryUsersRegistrationRepository = new InMemoryUsersRepository();
    const userRegistrationDetailsService = new UsersService(inMemoryUsersRegistrationRepository);

    //When
    const returnedEmail = await userRegistrationDetailsService.signUp(defaultUserRegistration);

    //Then
    expect(returnedEmail).toBe(defaultUserRegistration.email);
  });
});
