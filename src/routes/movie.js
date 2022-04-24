const express = require('express');
const movieController = require('../controllers').movies;

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - posterPath
 *         - VoteAverage
 *         - overview
 *       properties:
 *         title:
 *           type: string
 *           example: Interstellar
 *         posterPath:
 *           type: string
 *           example: image url
 *         overview:
 *           type: string
 *           example: ...description of the movie
 *         voteAverage:
 *           type: number
 *           example: 1
 */
/**
 * @swagger
 * /movies:
 *  post:
 *      tags:
 *          - Movies
 *      name: Create
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: Create new movie object
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/Movie' 
 
 *      responses:
 *          '201':
 *              description: User object has been created
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/Movie'
 */
router.post('', movieController.create);
router.get('', movieController.all);
router.get('/store', movieController.storeFetchedMovies);
router.get('/:id', movieController.show);
router.put('/:id', movieController.update);

module.exports = router;
