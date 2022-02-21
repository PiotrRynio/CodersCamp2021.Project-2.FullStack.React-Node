import Joi from 'joi';
import JoiObjectId from 'joi-objectid';
const myJoiObjectId = JoiObjectId(Joi);

const boardsValidationSchema = Joi.object({
  boardName: Joi.string().min(6).required(),
  coords: Joi.object().required(),
  accessType: Joi.string().required(),
  adminId: myJoiObjectId().required(),
  announcements: Joi.array(),
  dateCreated: Joi.date(),
});

export default boardsValidationSchema;
