import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { initialData } from './initialData';
import { v4 as uuidv4 } from 'uuid';

export const mockDatabase = factory({
  comment: {
    id: primaryKey(() => uuidv4()),
    content: String,
    createDate: String,
    author: String,
  },
  user: {
    id: primaryKey(() => uuidv4()),
    avatarUrl: String,
    firstName: String,
    lastName: String,
  },
  announcement: {
    id: primaryKey(() => uuidv4()),
    title: String,
  },
});

export const initDatabase = () => {
  initialData.map(({ itemName, collection }) => {
    collection.map((document) => {
      mockDatabase[itemName].create(document);
    });
  });
};
