import joi from 'joi';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(joi);

export const validateBoard = (newBoard) => {
  const boardsValidationSchema = joi.object({
    id: joi.string(),
    boardName: joi.string().min(5).required(),
    description: joi.string().min(5).required(),
    mapCoordinates: joi.object().required(),
    accessType: joi.string().required(),
    adminId: myJoiObjectId(),
    announcements: joi.array(),
    dateCreated: joi.date(),
    avatar: joi.string(),
  });

  return boardsValidationSchema.validate(newBoard);
};

export default validateBoard;
