export const announcementsSwagger = {
  '/rest-api/boards/{id}/announcements': {
    post: {
      tags: ['Announcements'],
      description: 'add announcement',
      summary: 'add announcement',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'id of the board',
          type: 'string',
          example: '1234-5678-9012-3456',
        },
      ],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  description: 'Title of creating announcement',
                  example: 'Hello World',
                },
                content: {
                  type: 'string',
                  description: 'Content of creating announcement',
                  example:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                boardName: {
                  type: 'string',
                  description: 'Name (id?) of board, where comment is creating',
                  example: 'Hello Board',
                },
                iconType: {
                  type: 'string',
                  description: 'Type of icon.',
                  example: 'default',
                },
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
                  announcements: 'announcements - uzupełnić (?)',
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
                example: { message: 'data and salt arguments required - uzupełnić (?)' },
              },
            },
          },
        },
      },
    },
  },
};
