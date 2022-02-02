import { commentListHandlers } from './commentLists/commentListsHandler';
import getAllBoardsHandler from './boards/boardsHandler';

export const handlers = [...commentListHandlers, ...getAllBoardsHandler];
