import { UserRegistrationDetails } from './UserRegistrationDetails.js';
import bcrypt from 'bcrypt';

export class UserRegistrationDetailsService {
  constructor(repository) {
    this.repository = repository;
  }

  async signUp(userRegistrationDetails) {
    const userEmail = userRegistrationDetails.email;
    const registeredUserRegistrationDetails = await this.repository.findUser(userEmail);

    const isUserExist = !!registeredUserRegistrationDetails.length;

    if (isUserExist) {
      throw new Error('User with this email exists');
    }

    const salt = 10;

    const nonHashedPassword = userRegistrationDetails.password;

    const hashedPassword = bcrypt.hashSync(nonHashedPassword, salt);

    const userRegistrationDetailWithHashPassword = new UserRegistrationDetails({
      userId: userRegistrationDetails.userId,
      firstName: userRegistrationDetails.firstName,
      lastName: userRegistrationDetails.lastName,
      email: userRegistrationDetails.email,
      password: hashedPassword,
    });

    await this.repository.createNewUser(userRegistrationDetailWithHashPassword);

    return userRegistrationDetailWithHashPassword.email;
  }
}
