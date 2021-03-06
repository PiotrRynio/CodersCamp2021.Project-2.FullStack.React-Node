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
    adminId: joi.string(),
    announcements: joi.array().required(),
    dateCreated: joi.date(),
    avatarUrl: joi.string().required(),
    adminFirstName: joi.string(),
    adminLastName: joi.string(),
  });

  return boardsValidationSchema.validate(newBoard);
};

export default validateBoard;
