import Joi from 'joi';

const helloWorldValidationSchema = Joi.object({
  name: Joi.string().min(6).required(),
});

export default helloWorldValidationSchema;
