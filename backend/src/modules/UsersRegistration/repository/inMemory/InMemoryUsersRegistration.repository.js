export class InMemoryUsersRegistrationRepository {
  constructor() {
    this.entities = {};
  }

  async createNewUser(userRegistrationDetails) {
    this.entities[userRegistrationDetails.email] = userRegistrationDetails;
  }

  async findUser(email) {
    return Promise.resolve(Object.keys(this.entities).map((email) => this.entities[email]));
  }
}
