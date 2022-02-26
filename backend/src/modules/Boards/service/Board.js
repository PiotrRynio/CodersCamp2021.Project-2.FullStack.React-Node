export class Board {
  constructor(props) {
    this.boardName = props.boardName;
    this.mapCoordinates = props.mapCoordinates;
    this.accessType = props.accessType;
    this.adminId = props.adminId;
    this.dateCreated = props.dateCreated;
    this.announcements = [];
  }
}
