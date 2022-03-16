import joi from 'joi';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(joi);

export const validateAddingAnnouncement = (params, repositoryType) => {
  let addingNewAnnouncementValidationSchema;
  if (repositoryType === 'MongoBoardsRepository') {
    addingNewAnnouncementValidationSchema = joi.object({
      boardId: myJoiObjectId().required(),
      announcementId: myJoiObjectId().required(),
    });
  } else {
    addingNewAnnouncementValidationSchema = joi.object({
      boardId: joi.string().required(),
      announcementId: myJoiObjectId().required(),
    });
  }

  return addingNewAnnouncementValidationSchema.validate(params);
};

export default validateAddingAnnouncement;
