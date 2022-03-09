import joi from 'joi';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(joi);

export const validateAddingAnnouncement = (obj) => {
  const addingNewAnnouncementValidationSchema = joi.object({
    boardId: myJoiObjectId().required(),
    announcementId: myJoiObjectId().required(),
  });

  return addingNewAnnouncementValidationSchema.validate(obj);
};

export default validateAddingAnnouncement;
