import { MongoBoardsRepository } from './repository/mongo/MongoBoards.repository.js';
import { BoardsService } from './service/Boards.service.js';
import { BoardsController } from './controller/BoardsController.js';
import { InMemoryBoardsRepository } from './repository/inMemory/InMemoryBoards.repository.js';

export const boardsModule = (moduleRepositoryType) => {
  const boardsRepository = (repositoryType) => {
    if (repositoryType === 'MONGO') {
      return new MongoBoardsRepository();
    }
    return new InMemoryBoardsRepository();
  };
  const repository = boardsRepository(moduleRepositoryType);
  const service = new BoardsService(repository);
  const controller = new BoardsController(service);

  return controller.router;
};
