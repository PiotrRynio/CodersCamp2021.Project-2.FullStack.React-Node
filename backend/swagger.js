import { usersRegistrationSwagger } from './src/modules/UsersRegistration/controller/UsersRegistration.swagger.js';
import { announcementsSwagger } from './src/modules/Announcements/controller/Announcements.swagger.js';

export const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'BoardMap',
    description: 'Server for BoardMap - social App for connecting people at the local level',
  },
  tags: [
    { name: 'Users registration', description: 'User route' },
    { name: 'Announcements', description: 'Announcements route' },
  ],
  servers: [{ url: 'http://localhost:5000', description: 'Local dev' }],
  paths: { ...usersRegistrationSwagger, ...announcementsSwagger },
};
