import { commentListHandlers } from './commentLists/commentListsHandler';
import getAllBoardsHandler from './boards/boardsHandler';
import announcementsHandler from './announcements/announcementHandler';
import getAvailableUserBoards from './boards/boardsHandler';
import availableUserBoards from './boards/boardsHandler';
import getAlreadyAssignedBoards from './boards/boardsHandler';
export const handlers = [
  ...commentListHandlers,
  ...getAllBoardsHandler,
  ...getAvailableUserBoards,
  ...availableUserBoards,
  ...getAlreadyAssignedBoards,
  announcementsHandler,
];
