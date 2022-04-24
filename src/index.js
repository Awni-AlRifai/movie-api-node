const express = require('express');
const YAML = require('yamljs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require('./utils/swaggerOptions');

const specs = swaggerJsdoc(swaggerOptions);
const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movie');

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(YAML.load('swagger.yml'))
);
app.get('/', (request, response) => response.send('Welcome'));
app.listen(port, () => console.log(`Listening on port ${port}`));
