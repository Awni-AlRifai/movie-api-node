const express = require('express');
const usersController = require('../controllers').users;
const { validateUser } = require('../middlewares/validators/userValidator');

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         username: Awni Rifai
 *         email: Awni@gmail.com
 *         password: Awni@2020
 */
/**
 * @swagger
 * /users:
 *  get:
 *   summary: get all users
 *   tags: [Users]
 *   responses:
 *     '200':
 *       description: A success
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *
 */
router.get('', usersController.getAll);
/**
 * @swagger
 * /users/{userId}:
 *  get:
 *   summary: get a user by userId
 *   tags: [Users]
 *   responses:
 *     '200' :
 *       description: A success
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/User'
 */
router.get('/:userId', usersController.show);
/**
 * @swagger
 * /users:
 *  post:
 *      tags:
 *          - Users
 *      name: Create
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: Create new user object
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/User' 
 
 *      responses:
 *          '201':
 *              description: User object has been created
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/User'
 */
router.route('').post(validateUser, usersController.create);
/**
 * @swagger
 * /users/{userId}:
 *  put:
 *      tags:
 *          - Users
 *      name: Update
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: Update new user object
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/User' 
 
 *      responses:
 *          '200':
 *              description: User object has been updated
 *              application/json:
 *                  schema:
 *                       $ref: '#/components/schemas/User'
 */
router.route('/:userId').put(validateUser, usersController.update);
/**
 * @swagger
 * /users/{userId}:
 *  delete:
 *   summary: delete a user by userId
 *   tags: [Users]
 *   responses:
 *     '204' :
 *       description: Deleted
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/User'
 */

router.delete('/:userId', usersController.delete);

module.exports = router;
