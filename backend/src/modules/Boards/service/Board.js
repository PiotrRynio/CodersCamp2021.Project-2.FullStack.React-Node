export class Board {
  constructor(props) {
    this.id = props.id;
    this.boardName = props.boardName;
    this.mapCoordinates = props.mapCoordinates;
    this.accessType = props.accessType;
    this.adminId = props.adminId;
    this.dateCreated = props.dateCreated || Date.now();
    this.announcements = props.announcements;
    this.avatarUrl = props.avatarUrl;
  }
}
