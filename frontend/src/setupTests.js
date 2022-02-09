import '@testing-library/jest-dom';
import { server } from 'mocks/msw/rest-api/server';
jest.setTimeout(10000);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
