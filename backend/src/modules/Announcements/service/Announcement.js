import { announcementValidationSchema } from './AnnouncementValidationSchema.js';

class Announcement {
  constructor(props) {
    const { error } = announcementValidationSchema.validate(props);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const { id, title, boardName, content, commentsIds, date, iconType } = props;
    this.id = id;
    this.title = title;
    this.boardName = boardName;
    this.iconType = iconType;
    this.content = content;
    this.commentsIds = commentsIds || [];
    this.date = date || Date.now();
  }
}

export default Announcement;
