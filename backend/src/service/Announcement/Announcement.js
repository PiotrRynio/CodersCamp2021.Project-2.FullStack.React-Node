class Announcement {
  constructor(props) {
    const { id, title, boardName, content, comments, date, iconType } = props;
    this.id = id;
    this.title = title;
    this.boardName = boardName;
    this.iconType = iconType;
    this.content = content;
    this.commentsIds = comments || [];
    this.date = date || Date.now();
  }
}

export default Announcement;
