export const usersRegistrationSwagger = {
  '/rest-api/sign-up': {
    post: {
      tags: ['Users registration'],
      description: 'Sign up user',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string',
                  description: 'First name of the user',
                  example: 'Joe',
                },
                lastName: {
                  type: 'string',
                  description: 'Last name of the user',
                  example: 'Doe',
                },
                email: {
                  type: 'string',
                  description: 'User email address',
                  example: 'pwrynio@gmail.com ',
                },
                password: { type: 'string', description: 'User Password', example: 'admin1234' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: {
                  email: 'pwrynio@gmail.com ',
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
};
