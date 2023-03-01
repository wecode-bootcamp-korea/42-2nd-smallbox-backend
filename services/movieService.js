const movieDao = require('../models/movieDao');

const getMovies = async (main, release, sort) => {
  return await movieDao.getMovies(main, release, sort);
};

const getMovieById = async (movieId) => {
  return await movieDao.getMovieById(movieId);
};

module.exports = {
  getMovies,
  getMovieById,
};
