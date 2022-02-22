import { UserRegistrationDetailRepository } from '../../repository/User/SignUpModels.repository.js';

export class UserRegistrationDetailsService {
  static async signUp(userRegistrationDetails) {
    const userEmail = userRegistrationDetails.email;
    const registeredUserRegistrationDetails = await UserRegistrationDetailRepository.findUser(
      userEmail,
    );
    console.log(registeredUserRegistrationDetails);

    const isUserExist = !!registeredUserRegistrationDetails.length;

    if (isUserExist) {
      throw new Error('User with this email exists');
    }
    await UserRegistrationDetailRepository.createNewUser(userRegistrationDetails);

    return registeredUserRegistrationDetails;
  }
}
