import { usersRegistrationDocumentation } from './src/modules/UsersRegistration/controller/usersRegistration.documentation.js';

export const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'BoardMap',
    description: 'Server for BoardMap - social App for connecting people at the local level',
  },
  tags: [{ name: 'Registrations', description: 'User route' }],
  servers: [{ url: 'http://localhost:5000', description: 'Local dev' }],
  paths: usersRegistrationDocumentation,
};
