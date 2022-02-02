import { commentListHandlers } from './commentLists/commentListsHandler';
import { boardsHandlers } from './boardsLists/boardsListsHandler';
import announcementsHandler from './announcements/announcementHandler';

export const handlers = [...commentListHandlers, ...boardsHandlers, announcementsHandler];
