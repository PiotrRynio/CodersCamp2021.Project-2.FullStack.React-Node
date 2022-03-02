export class NotFoundError extends Error {
  constructor(props) {
    super(props);
    this.name = 'NotFoundError';
    this.message = props ? `${props} not found.` : 'Item not found';
  }
}
