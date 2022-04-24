module.exports = {
  swaggerOptions: {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Movie express api',
        version: '0.1.0',
        description:
          'This is a simple CRUD API application made with Express and documented with Swagger',
        license: {
          name: 'MIT',
          url: 'https://spdx.org/licenses/MIT.html',
        },
      },
    },
    apis: ['src/routes/*.js'],
  },
};
