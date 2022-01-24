import { commentListHandlers } from './commentLists/commentListsHandler';
import boardsListsHandler from './boardsLists/boardsListsHandler';

export const handlers = [...commentListHandlers, boardsListsHandler];
