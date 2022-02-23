class Announcement {
  constructor(props) {
    // TODO: Dodać walidację

    const { title, boardName, content, comments, date } = props;
    this.title = title;
    this.boardName = boardName;
    this.content = content;
    this.commentsIds = comments || [];
    this.date = date || Date.now();
  }
}

export default Announcement;
