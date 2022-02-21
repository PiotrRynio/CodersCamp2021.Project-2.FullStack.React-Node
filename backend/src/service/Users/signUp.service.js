import { UserRegistrationDetailRepository } from '../../repository/User/SignUpModels.repository.js';

export class UserRegistrationDetailsService {
  static async signUp(userRegistrationDetails) {
    const userEmail = userRegistrationDetails.email;
    const registeredUserRegistrationDetails = await UserRegistrationDetailRepository.find(
      userEmail,
    );
    return registeredUserRegistrationDetails;
  }
}
