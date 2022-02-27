import { validateAnnouncement } from './AnnouncementValidationSchema.js';
import { v4 as uuidv4 } from 'uuid';

class Announcement {
  constructor(props) {
    const { error } = validateAnnouncement(props);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const { id, title, boardName, content, commentsIds, date, iconType } = props;
    this.id = id || uuidv4();
    this.title = title;
    this.boardName = boardName;
    this.iconType = iconType || 'default';
    this.content = content;
    this.commentsIds = commentsIds || [];
    this.date = date || Date.now();
  }
}

export default Announcement;
