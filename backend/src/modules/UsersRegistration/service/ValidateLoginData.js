import joi from 'joi';

export const validateLoginData = (data) => {
  const validateLoginSchema = joi.object({
    email: joi.string().min(6).max(254).email().required(),
    password: joi.string().min(6).max(15).required(),
  });
  return validateLoginSchema.validate(data);
};
