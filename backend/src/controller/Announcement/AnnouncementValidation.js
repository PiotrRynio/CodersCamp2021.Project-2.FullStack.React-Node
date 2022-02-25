import Joi from 'joi';

export const announcementValidationSchema = Joi.object({
  id: Joi.string(),
  title: Joi.string().min(5).max(100).required(),
  boardName: Joi.string().min(5).max(100).required(),
  iconType: Joi.string(),
  content: Joi.string().min(20).max(300).required(),
  commentsIds: Joi.array().items(Joi.string()),
  date: Joi.date(),
});

export const announcementValidation = (request, response, next) => {
  const { error } = announcementValidationSchema.validate(request.body);
  if (error) {
    response.status(400).send({ message: error.message });
  } else {
    next();
  }
};
