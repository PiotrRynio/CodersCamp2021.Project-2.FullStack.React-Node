import joi from 'joi';

export const loginValidation = (data) => {
  const logInValidationSchema = joi.object({
    email: joi.string().min(6).email().required(),
    password: joi.string().min(6).required(),
  });
  return logInValidationSchema.validate(data);
};
