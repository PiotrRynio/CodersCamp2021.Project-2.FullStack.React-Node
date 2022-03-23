import { v4 as uuidv4 } from 'uuid';
import { validateComment } from './CommentValidationSchema.js';

export class Comment {
  constructor(props) {
    const { error } = validateComment(props);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const { userId, content, date, id, authorFirstName, authorLastName, authorAvatarUrl } = props;
    this.id = id || uuidv4();
    this.userId = userId || 'Testid';
    this.content = content;
    this.date = date || Date.now();
    this.author = {
      firstName: authorFirstName || '',
      lastName: authorLastName || '',
      avatarUrl:
        authorAvatarUrl || 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg',
    };
  }
}
