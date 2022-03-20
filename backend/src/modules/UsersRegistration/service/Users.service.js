import bcrypt from 'bcrypt';
import { UserRegistration } from './UserRegistration.js';
import { validateLoginData } from './ValidateLoginData.js';
import { validateRegistrationData } from './ValidateRegistrationData.js';

export class UsersService {
  constructor(repository) {
    this.repository = repository;
  }

  async signUp(userRegistrationDetails) {
    const { error } = validateRegistrationData(userRegistrationDetails);
    if (error) {
      console.log(error.details[0].message);
      throw new Error(error.details[0].message);
    }

    const userEmail = userRegistrationDetails.email;
    const foundUser = await this.repository.findUser(userEmail);
    console.log(foundUser);
    const isUserExist = !!foundUser;

    if (isUserExist) {
      throw new Error('User with this email exists');
    }

    const nonHashedPassword = userRegistrationDetails.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(nonHashedPassword, salt);

    const userRegistrationDetailWithHashPassword = new UserRegistration({
      userId: userRegistrationDetails.userId,
      firstName: userRegistrationDetails.firstName,
      lastName: userRegistrationDetails.lastName,
      email: userRegistrationDetails.email,
      password: hashedPassword,
    });

    const newUser = await this.repository.createNewUser(userRegistrationDetailWithHashPassword);
    return newUser.email;
  }

  async logIn(userLogIn) {
    const { error } = validateLoginData(userLogIn);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const foundUser = await this.repository.findUser(userLogIn.email);

    if (!foundUser) {
      throw new Error('Email or password is wrong');
    }

    const isUserPasswordValid = await bcrypt.compare(userLogIn.password, foundUser.password);

    if (!isUserPasswordValid) {
      throw new Error('Invalid password');
    }

    return foundUser.email;
  }
}
