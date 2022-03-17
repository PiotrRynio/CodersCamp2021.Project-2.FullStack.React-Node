import joi from 'joi';

export const validateRegistration = (data) => {
  const validateRegistrationSchema = joi.object({
    userId: joi.string(),
    firstName: joi.string().min(4).max(15).required(),
    lastName: joi.string().min(4).max(15).required(),
    email: joi.string().min(6).max(15).email().required(),
    password: joi.string().min(6).max(15).required(),
  });
  return validateRegistrationSchema.validate(data);
};
