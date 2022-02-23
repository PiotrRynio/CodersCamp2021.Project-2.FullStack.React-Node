class Announcement {
  constructor({ announcement }) {
    const { title, boardName, content, comments, date } = announcement;
    this.title = title;
    this.boardName = boardName;
    this.content = content;
    this.commentsIds = comments || [];
    this.date = date || Date.now();
  }
}

export default Announcement;
