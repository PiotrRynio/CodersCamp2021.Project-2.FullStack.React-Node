import Joi from 'joi';

export const validateComment = (props) => {
  const commentValidationSchema = Joi.object({
    userId: Joi.string(),
    content: Joi.string().required(),
    date: Joi.date(),
    commentIds: Joi.string(),
  });

  return commentValidationSchema.validate(props);
};