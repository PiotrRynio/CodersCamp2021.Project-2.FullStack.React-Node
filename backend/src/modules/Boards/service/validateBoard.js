import joi from 'joi';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(joi);

export const validateBoard = (newBoard) => {
  const boardsValidationSchema = joi.object({
    id: joi.string(),
    boardName: joi.string().min(6).required(),
    mapCoordinates: joi.object().required(),
    accessType: joi.string().required(),
    adminId: myJoiObjectId().required(),
    announcements: joi.array(),
    dateCreated: joi.date(),
  });

  return boardsValidationSchema.validate(newBoard);
};

export default validateBoard;
