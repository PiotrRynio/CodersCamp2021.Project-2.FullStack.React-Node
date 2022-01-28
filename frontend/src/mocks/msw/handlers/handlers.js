import { commentListHandlers } from './commentLists/commentListsHandler';
import getAllBoardsHandler from './boardsLists/boardsListsHandler';
import { announcementListHandler } from './announcementLists/announcementListHandlers';

export const handlers = [
  ...commentListHandlers,
  ...getAllBoardsHandler,
  ...announcementListHandler,
];
