const { userService } = require('../services');

module.exports = {
  async getAll(request, response) {
    try {
      const users = await userService.all();
      return response.status(200).send(users);
    } catch (error) {
      return response.status(500).send({ error });
    }
  },
  async show(request, response) {
    try {
      const user = await userService.show(request.params.userId);
      if (!user) return response.status(404).send({ error: 'User not found' });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send({ error: error.message });
    }
  },

  async create(request, response) {
    try {
      const user = await userService.create(request.body);
      return response.status(200).send(user);
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  },
  async update(request, response) {
    try {
      const user = await userService.update(
        request.body,
        request.params.userId
      );
      if (!user)
        return response
          .status(404)
          .send({ error: 'The user you are trying to update was not found' });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send(error);
    }
  },
  async delete(request, response) {
    try {
      const user = await userService.delete(request.params.userId);
      if (user === 0)
        return response
          .status(404)
          .send({ error: 'The user you are trying to delete was not found' });
      return response.sendStatus(204);
    } catch (error) {
      return response.status(500).send(error);
    }
  },
};
