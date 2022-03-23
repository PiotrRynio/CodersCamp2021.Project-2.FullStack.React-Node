import validateBoard from './validateBoard.js';

export class Board {
  constructor(props) {
    const { error } = validateBoard(props);
    if (error) {
      throw new Error(error.details[0].message);
    }
    this.id = props.id;
    this.boardName = props.boardName;
    this.mapCoordinates = props.mapCoordinates;
    this.accessType = props.accessType;
    this.adminId = props.adminId;
    this.dateCreated = props.dateCreated || Date.now();
    this.announcements = props.announcements || [];
    this.avatarUrl = props.avatarUrl;
    this.description = props.description;
    this.adminFirstName = props.adminFirstName;
    this.adminLastName = props.adminLastName;
  }
}
