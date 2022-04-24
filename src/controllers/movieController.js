const { movieService } = require('../services');

module.exports = {
  async all(request, response) {
    const movies = await movieService.all();
    return response.status(200).send(movies);
  },
  async show(request, response) {
    const movie = await movieService.show(request.params.id);
    return response.status(200).send(movie);
  },
  async create(request, response) {
    const movies = await movieService.create(request.body);
    return response.status(201).send(movies);
  },
  async update(request, response) {
    const movie = await movieService.update(request.body, request.params.id);
    return response.status(200).send(movie);
  },
  async storeFetchedMovies(request, response) {
    await movieService.storeFetchedMovies(request.params.page);
    return response.status(201).send('stored');
  },
};
