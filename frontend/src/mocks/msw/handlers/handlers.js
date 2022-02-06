import { commentListHandlers } from './commentLists/commentListsHandler';
import getAllBoardsHandler from './boards/boardsHandler';
import announcementsHandler from './announcements/announcementHandler';

export const handlers = [...commentListHandlers, ...getAllBoardsHandler, announcementsHandler];
