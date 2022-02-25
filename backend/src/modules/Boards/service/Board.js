export class Board {
  constructor(props) {
    this.boardName = props.boardName;
    this.coords = props.coords;
    this.accessType = props.accessType;
    this.adminId = props.adminId;
    this.dateCreated = props.dateCreated;
    this.announcements = [];
  }
}
