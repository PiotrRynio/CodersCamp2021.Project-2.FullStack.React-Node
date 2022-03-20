export const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'BoardMap',
    description: 'Server for BoardMap - social App for connecting people at the local level',
  },
  tags: [{ name: 'Registrations', description: 'User route' }],
  servers: [{ url: 'http://localhost:5000', description: 'Local dev' }],
  paths: {
    '/rest-api/sign-up': {
      post: {
        tags: ['Users registration'],
        description: 'Users registration module.',
        responses: {
          200: {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    email: 'pwrynio@gmail.com',
                  },
                },
              },
            },
          },
          405: {
            description: 'Validation exception',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: { message: 'data and salt arguments required' },
                },
              },
            },
          },
        },
      },
    },
  },
};
