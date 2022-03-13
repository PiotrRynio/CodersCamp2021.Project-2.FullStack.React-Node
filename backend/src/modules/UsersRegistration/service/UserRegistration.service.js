import { UserRegistration } from './UserRegistration.js';
import bcrypt from 'bcrypt';
import { UserLogIn } from './UserLogIn.js';
import { loginValidation } from './ValidateLogIn.js';
import { registrationValidation } from './ValidateRegistration.js';
import { request, response } from 'express';

export class UserRegistrationService {
  constructor(repository) {
    this.repository = repository;
  }

  async signUp(userRegistrationDetails) {
    const { error } = registrationValidation(userRegistrationDetails);
    if (error) {
      console.log(error.details[0].message);
      throw new Error(error.details[0].message);
    }

    const userEmail = userRegistrationDetails.email;
    const registeredUserRegistrationDetails = await this.repository.findUser(userEmail);

    const isUserExist = !!registeredUserRegistrationDetails.length;

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
    console.log({ userLogIn });
    const { error } = loginValidation(userLogIn);
    if (error) {
      console.log(error.details[0].message);
      throw new Error(error.details[0].message);
    }
    const findUserEmail = userLogIn.email;
    const foundUserDetails = await this.repository.findUser(findUserEmail);

    if (!foundUserDetails) {
      throw new Error('Email or password is wrong');
    }

    console.log('jestesmy przed compare');
    console.log(userLogIn.password);
    console.log(foundUserDetails);
    const isUserValidPassword = await bcrypt.compareSync(
      foundUserDetails.password,
      userLogIn.password,
    );
    console.log('jestesmy po compare');
    if (!isUserValidPassword) {
      throw new Error('Invalid password');
    }

    return 'Success logIn';
  }
}
