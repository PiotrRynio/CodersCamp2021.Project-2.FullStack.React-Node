import { handlers } from './handlers/handlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
