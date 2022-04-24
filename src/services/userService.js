const { User } = require('../models');
const { hash } = require('../utils/passwordHash');

module.exports = {
  /**
   * Get all user records from the database.
   *
   * @return {Promise<ArrayOf(object)>} Promise
   */
  async all() {
    const users = await User.findAll();
    return users;
  },

  /**
   * Show single user record based on id.
   *
   * @param {number} id
   *
   * @return {Promise<object>} Promise
   */
  async show(id) {
    const user = await User.findByPk(id, {});
    return user;
  },
  /**
   * Create new user.
   *
   * @param {object} user
   *
   * @return {Promise<object>} Promise
   */
  async create(user) {
    const USER_MODEL = {
      username: user.username,
      email: user.email,
      password: hash(user.password),
    };
    const userCreated = await User.create(USER_MODEL);
    return { ...userCreated.dataValues, password: undefined };
  },
  /**
   * Update user based on an id given
   *
   * @param {object} user
   * @param {Number} id
   *
   * @return {Promise<object>} Promise
   */
  async update(user, id) {
    const USER_MODEL = {
      username: user.username,
      email: user.email,
      password: hash(user.password),
    };

    const [status, userUpdated] = await User.update(USER_MODEL, {
      returning: true,
      where: { id },
    });
    if (status === 0) return status;
    return { ...userUpdated[0].dataValues, password: undefined };
  },
  /**
   * Delete a user record based on id.
   *
   * @param {Number} id
   *
   * @return {Number}
   */
  async delete(id) {
    const user = await User.destroy({ where: { id } });
    return user;
  },
};
