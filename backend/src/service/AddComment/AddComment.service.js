import { AddComment } from '../../repository/AddComment/AddComment.repository';
import AddCommentValidationSchema from './AddCommentValidationSchema.js';

export class AddCommentService {
  static async postHelloWorld(req, res) {
    const { error } = AddCommentValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const msg = { name: req.body.name };
    res.status(200).json(hello);
  }
}
