import joi from 'joi';

export const registrationValidation = (data) => {
  const registrationValidationSchema = joi.object({
    userId: joi.string(),
    firstName: joi.string().min(4).required(),
    lastName: joi.string().min(4).required(),
    email: joi.string().min(6).email().required(),
    password: joi.string().min(6).required(),
  });
  return registrationValidationSchema.validate(data);
};
