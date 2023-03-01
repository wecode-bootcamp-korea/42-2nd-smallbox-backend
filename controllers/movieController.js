const movieService = require('../services/movieService');
const { catchAsync } = require('../utils/error');

const getMovies = catchAsync(async (req, res) => {
  const { main, release, sort } = req.query;

  const getMovies = await movieService.getMovies(main, release, sort);
  return res.status(200).json({ getMovies });
});

const getMovieById = catchAsync(async (req, res) => {
  const { movieId } = req.query;

  const getMovieDetail = await movieService.getMovieById(movieId);
  return res.status(200).json({ getMovieDetail });
});

module.exports = {
  getMovies,
  getMovieById,
};
