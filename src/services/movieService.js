const fetch = require('node-fetch');
const { Movie } = require('../models');

module.exports = {
  async create(movie) {
    const MOVIE_MODEL = {
      title: movie.title,
      posterPath: movie.posterPath,
      voteAverage: movie.voteAverage,
      overview: movie.overview,
    };
    const movieCreated = await Movie.create(MOVIE_MODEL);
    return movieCreated;
  },
  async fetchMovie(page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a6ce94f05ccb22f0236d41a4d037e960&page=${page}`
    );
    const data = await response.json();
    return data.results;
  },
  async storeFetchedMovies(page = 1) {
    const movies = await this.fetchMovie(page);
    movies.forEach(async (movie) => {
      const MOVIE_MODEL = {
        title: movie.title,
        posterPath: movie.poster_path,
        voteAverage: Number(movie.vote_average),
        overview: movie.overview,
      };
      await Movie.create(MOVIE_MODEL);
    });
  },
  async all() {
    const movies = await Movie.findAll();
    return movies;
  },
  async show(id) {
    const movie = await Movie.findByPk(id, {});
    return movie;
  },
  async update(movie, id) {
    const MOVIE_MODEL = {
      title: movie.title,
      posterPath: movie.posterPath,
      voteAverage: movie.voteAverage,
      overview: movie.overview,
    };
    const [status, movieUpdated] = await Movie.update(MOVIE_MODEL, {
      returning: true,
      where: { id },
    });
    if (status === 0) return status;
    return movieUpdated;
  },
};
