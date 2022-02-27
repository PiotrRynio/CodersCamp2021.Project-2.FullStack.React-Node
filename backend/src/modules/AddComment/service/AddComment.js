import { v4 as uuidv4 } from 'uuid';

export class Comment {
  constructor(props) {
    this.userId = props.userId || uuidv4();
    this.board = props.board;
    this.content = props.content;
    this.date = props.date;
  }
}
