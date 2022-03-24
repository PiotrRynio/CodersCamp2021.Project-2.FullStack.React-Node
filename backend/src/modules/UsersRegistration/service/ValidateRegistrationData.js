import joi from 'joi';

export const validateRegistrationData = (data) => {
  const validateRegistrationSchema = joi.object({
    userId: joi.string(),
    firstName: joi.string().min(4).max(15).required(),
    lastName: joi.string().min(4).max(15).required(),
    email: joi.string().min(6).max(254).email().required(),
    password: joi.string().min(6).max(15).required(),
    avatarUrl: joi.string().min(10).max(100),
    subscribedBoards: joi.array(),
  });
  return validateRegistrationSchema.validate(data);
};
