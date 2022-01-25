import { commentListHandlers } from './commentLists/commentListsHandler';
import boardsListsHandler from './boardsLists/boardsListsHandler';
import announcementsHandler from './announcements/announcementHandler';

export const handlers = [...commentListHandlers, boardsListsHandler, announcementsHandler];
