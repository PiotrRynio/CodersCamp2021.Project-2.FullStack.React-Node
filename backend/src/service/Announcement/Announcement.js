class Announcement {
  constructor(announcement) {
    const { id, title, boardName, content, comments, date } = announcement;
    this.id = id;
    this.title = title;
    this.boardName = boardName;
    this.content = content;
    this.commentsIds = comments;
    this.date = date;
  }
}

export default Announcement;
