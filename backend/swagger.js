import swaggerJsDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'BoardMap',
    description: 'Server for BoardMap - social App for connecting people at the local level',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
};

const swaggerOptions = {
  swaggerDefinition,
  openapi: '3.0.0',
  host: 'localhost:3000',
  basePath: '/rest-api/',
  apis: ['./src/modules/Boards/controller/Boards.controller.js'],
};

export const swaggerSpec = swaggerJsDoc(swaggerOptions);
