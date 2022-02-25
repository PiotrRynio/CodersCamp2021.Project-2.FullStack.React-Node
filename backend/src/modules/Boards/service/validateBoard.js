import joi from 'joi';
import JoiObjectId from 'joi-objectid';
const myJoiObjectId = JoiObjectId(joi);

export const validateBoard = (newBoard) => {


  const boardsValidationSchema = joi.object({
    boardName: joi.string().min(6).required(),
    coords: joi.object().required(),
    accessType: joi.string().required(),
    adminId: myJoiObjectId().required(),
    announcements: joi.array(),
    dateCreated: joi.date(),
  });

  return boardsValidationSchema.validate(newBoard);

}

export default validateBoard;
