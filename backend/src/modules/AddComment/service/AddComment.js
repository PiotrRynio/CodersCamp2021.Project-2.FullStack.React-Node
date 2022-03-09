import { v4 as uuidv4 } from 'uuid';

export class Comment {
  constructor(props) {
    const { userId, content, date, commentId } = props;
    this.userId = userId || uuidv4();
    this.content = content;
    this.date = date || Date.now();
    this.commentId = commentId
  }
}
