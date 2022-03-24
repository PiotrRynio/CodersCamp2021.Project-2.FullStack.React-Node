import bcrypt from 'bcrypt';
import { UserRegistration } from './UserRegistration.js';
import { validateLoginData } from './ValidateLoginData.js';
import { validateRegistrationData } from './ValidateRegistrationData.js';

export class UsersService {
  constructor(repository) {
    this.repository = repository;
    this.boardsService = {};
  }

  async signUp(userRegistrationDetails) {
    const { error } = validateRegistrationData(userRegistrationDetails);
    if (error) {
      console.log(error.details[0].message);
      throw new Error(error.details[0].message);
    }

    const userEmail = userRegistrationDetails.email;
    const foundUser = await this.repository.findUserByEmail(userEmail);
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

    const foundUser = await this.repository.findUserByEmail(userLogIn.email);

    if (!foundUser) {
      throw new Error('Email or password is wrong');
    }

    const isUserPasswordValid = await bcrypt.compare(userLogIn.password, foundUser.password);

    if (!isUserPasswordValid) {
      throw new Error('Invalid password');
    }
    return foundUser;
  }

  async logOut(data) {
    await data.clearCookie('auth_token');
    return data;
  }

  async getUser(userId) {
    if (!userId) {
      throw new Error('No user Id!');
    }
    const returnedUser = await this.repository.findUserById(userId);
    return returnedUser;
  }

  async getUserSubscribedBoards(userId) {
    if (!userId) {
      throw new Error('No user Id!');
    }
    const returnedUser = await this.repository.findUserById(userId);
    const userSubscribedBoardsId = returnedUser.subscribedBoards;
    const userSubscribedBoards = [];
    for (const boardId of userSubscribedBoardsId) {
      if (boardId) {
        const board = await this.boardsService.getOneBoardById(boardId);
        board.adminFirstName = returnedUser.firstName;
        board.adminLastName = returnedUser.lastName;
        userSubscribedBoards.push(board);
      }
    }
    return userSubscribedBoards;
  }
}
