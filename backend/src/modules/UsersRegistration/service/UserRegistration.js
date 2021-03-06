import { v4 as uuidv4 } from 'uuid';

export class UserRegistration {
  constructor(props) {
    this.userId = props.userId || uuidv4();
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.email = props.email;
    this.password = props.password;
    this.avatarUrl = props.avatarUrl || 'sampleAvatarUrl';
    this.subscribedBoards = props.subscribedBoards || [];
  }
}
