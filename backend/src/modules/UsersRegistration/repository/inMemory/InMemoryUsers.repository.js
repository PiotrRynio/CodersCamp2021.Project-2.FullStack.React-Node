export class InMemoryUsersRepository {
  constructor() {
    this.entities = {};
  }

  async createNewUser(userRegistrationDetails) {
    this.entities[userRegistrationDetails.email] = userRegistrationDetails;
    return this.entities[userRegistrationDetails.email];
  }

  async findUserByEmail(email) {
    return this.entities[email];
  }
}
