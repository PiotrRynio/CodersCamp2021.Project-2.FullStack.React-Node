import { commentListHandlers } from './commentLists/commentListsHandler';
import boardsListsHandler from './boardsLists/boardsListsHandler';
import { announcementListHandler } from './announcementLists/announcementListHandlers';

export const handlers = [...commentListHandlers, boardsListsHandler, ...announcementListHandler];
