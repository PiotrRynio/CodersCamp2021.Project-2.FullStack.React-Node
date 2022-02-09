import { commentListHandlers } from './commentLists/handlers/commentListsHandler';
import getAllBoardsHandler from './boards/handlers/boardsHandler';
import announcementsHandler from './announcements/handlers/announcementHandler';
import getAvailableUserBoards from './boards/handlers/boardsHandler';
import availableUserBoards from './boards/handlers/boardsHandler';
import getAlreadyAssignedBoards from './boards/handlers/boardsHandler';
import getUserBoards from './boards/handlers/boardsHandler';
export const handlers = [
  ...commentListHandlers,
  ...getAllBoardsHandler,
  ...getAvailableUserBoards,
  ...availableUserBoards,
  ...getAlreadyAssignedBoards,
  ...getUserBoards,
  announcementsHandler,
];
