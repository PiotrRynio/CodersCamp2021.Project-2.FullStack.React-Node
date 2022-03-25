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
          example: '62379b22771651aecc5ed07c',
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
                  announcements: [
                    {
                      id: '62379b22771651aecc5ed07c',
                      title: 'Hello World',
                      boardName: 'Hello Board',
                      iconType: 'default',
                      content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      commentsIds: [],
                      date: '2022-03-20T21:22:42.039Z',
                    },
                    {
                      id: '62379b3c771651aecc5ed085',
                      title: 'Second',
                      boardName: 'Wrocław',
                      iconType: 'default',
                      content: 'Jakiś inny content na minimum 20 znaków',
                      commentsIds: ['623a6281ac0cb9c066772949'],
                      date: '2022-03-20T21:23:08.090Z',
                    },
                  ],
                },
              },
            },
          },
        },
        400: {
          description: 'Validation exception',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Content is required' },
              },
            },
          },
        },
      },
    },
    get: {
      tags: ['Announcements'],
      description: 'get board announcements',
      summary: 'Gets one board announcements',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'id of the board',
          type: 'string',
          example: '62379b22771651aecc5ed07c',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: {
                  announcements: [
                    {
                      id: '62379b22771651aecc5ed07c',
                      title: 'Hello World',
                      boardName: 'Hello Board',
                      iconType: 'default',
                      content:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      commentsIds: [],
                      date: '2022-03-20T21:22:42.039Z',
                    },
                    {
                      id: '62379b3c771651aecc5ed085',
                      title: 'Second',
                      boardName: 'Wrocław',
                      iconType: 'default',
                      content: 'Jakiś inny content na minimum 20 znaków',
                      commentsIds: ['623a6281ac0cb9c066772949'],
                      date: '2022-03-20T21:23:08.090Z',
                    },
                  ],
                },
              },
            },
          },
        },
        404: {
          description: 'Validation exception',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Board not found' },
              },
            },
          },
        },
      },
    },
  },
  '/rest-api/announcements/{id}': {
    get: {
      tags: ['Announcements'],
      description: 'get announcement',
      summary: 'Gets one announcement data by id',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'id of the announcement',
          type: 'string',
          example: '62379b22771651aecc5ed07c',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: {
                  announcement: {
                    id: '62379b22771651aecc5ed07c',
                    title: 'Hello World',
                    boardName: 'Hello Board',
                    iconType: 'default',
                    content:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    commentsIds: [],
                    date: '2022-03-20T21:22:42.039Z',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Exceptions',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Error message' },
              },
            },
          },
        },
        404: {
          description: 'Not found exception',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Announcement not found' },
              },
            },
          },
        },
      },
    },
    patch: {
      tags: ['Announcements'],
      description: 'update announcement',
      summary: 'Change announcement body',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'id of the announcement',
          type: 'string',
          example: '62379b22771651aecc5ed07c',
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
                  description: 'New announcement title',
                  example: 'Hello World',
                },
                content: {
                  type: 'string',
                  description: 'New announcement content',
                  example: 'New text fot announcement without lorem ipsum.',
                },
                iconType: {
                  type: 'string',
                  description: 'New Announcement type of icon',
                  example: 'electricity',
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
                  announcement: {
                    id: '62379b22771651aecc5ed07c',
                    title: 'New announcement title',
                    boardName: 'Hello Board',
                    iconType: 'electricity',
                    content: 'New text fot announcement without lorem ipsum.',
                    commentsIds: [],
                    date: '2022-03-20T21:22:42.039Z',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Exceptions',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Error message' },
              },
            },
          },
        },
        404: {
          description: 'Not found exception',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Announcement not found.' },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ['Announcements'],
      description: 'delete announcement',
      summary: 'Remove announcement and announcement id from board announcements list',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'id of the announcement',
          type: 'string',
          example: '62379b22771651aecc5ed07c',
        },
      ],
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: {
                  announcement: {
                    id: '62379b22771651aecc5ed07c',
                    title: 'Hello World',
                    boardName: 'Hello Board',
                    iconType: 'default',
                    content:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    commentsIds: [],
                    date: '2022-03-20T21:22:42.039Z',
                  },
                },
              },
            },
          },
        },
        400: {
          description: 'Exceptions',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: { message: 'Error message' },
              },
            },
          },
        },
      },
    },
  },
};
