// src/mocks/browser.js
import { setupWorker } from 'msw';
import { handlers } from './handlers/handlers';
import { initDatabase } from './database/mockDatabase';

// This configures a Service Worker with the given request handlers.

initDatabase();
export const worker = setupWorker(...handlers);
