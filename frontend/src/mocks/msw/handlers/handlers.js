import { commentListHandlers } from './commentLists/commentListsHandler';
import { boards } from './boardsLists/boardsListsHandler';

export const handlers = [...commentListHandlers, ...boards];
