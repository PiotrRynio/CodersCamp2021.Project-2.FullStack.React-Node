import joi from 'joi';

export const validateLogin = (data) => {
  const validateLoginSchema = joi.object({
    email: joi.string().min(6).max(15).email().required(),
    password: joi.string().min(6).max(15).required(),
  });
  return validateLoginSchema.validate(data);
};
