import { v4 as uuidv4 } from 'uuid';

export class Comment {
  constructor(props) {
    const { userId, content, date, id } = props;
    this.id = id || uuidv4();
    this.userId = userId || 'Testid';
    this.content = content;
    this.date = date || Date.now();
  }
}
