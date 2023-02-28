const movieDao = require('../models/movieDao');

const getMovies = async (main, release, sort) => {
  return await movieDao.getMovies(main, release, sort);
};

const getMovieById = async (movieId) => {
  const result = await movieDao.getMovieById(movieId);

  return result;
};

module.exports = {
  getMovies,
  getMovieById,
};
