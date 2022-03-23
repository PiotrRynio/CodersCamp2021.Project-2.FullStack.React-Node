import Joi from 'joi';

export const validateComment = (props) => {
  const commentValidationSchema = Joi.object({
    id: Joi.string(),
    userId: Joi.string(),
    content: Joi.string().required(),
    date: Joi.date(),
    author: Joi.object(),
  });

  return commentValidationSchema.validate(props);
};
