export const usersRegistrationSwagger = {
  '/rest-api/sign-up': {
    post: {
      tags: ['Users registration'],
      description: 'Sign up user',
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
};
