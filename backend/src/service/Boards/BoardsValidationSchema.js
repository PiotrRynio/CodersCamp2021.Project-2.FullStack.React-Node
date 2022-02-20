import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
const myJoiObjectId = JoiObjectId(Joi);

const boardsValidationSchema = Joi.object({
  boardName: Joi.string().min(10).required(),
  coords: Joi.object().required(),
  accessType: Joi.string().required(),
  admin: myJoiObjectId().required,
});

export default boardsValidationSchema;
