const appDataSource = require('../../models/dataSource');

const createDirectors = (directorList) => {
  const data = [];

  for (const director of directorList) {
    data.push([director.id, director.name]);
  }

  return appDataSource.query(
    `
      INSERT INTO directors (
        id,
        name
      ) VALUES ?`,
    [data]
  );
};

const createFilmRatings = (ratingList) => {
  const data = [];

  for (const filmRating of ratingList) {
    data.push([filmRating.id, filmRating.rating]);
  }

  return appDataSource.query(
    `
    INSERT INTO film_ratings (
      id,
      rating
    ) VALUES ?`,
    [data]
  );
};

const createMovies = (movieList) => {
  const data = [];

  for (const movie of movieList) {
    data.push([
      movie.id,
      movie.name,
      movie.english_name,
      movie.simple_description,
      movie.detail_description,
      movie.thumbnail_image_url,
      movie.director_id,
      movie.opening_date,
      movie.film_rating_id,
      movie.running_time,
      movie.country,
      movie.score_card,
      movie.created_at,
      movie.updated_at,
    ]);
  }

  return appDataSource.query(
    `
    INSERT INTO movies (
      id,
      name,
      english_name,
      simple_description,
      detail_description,
      thumbnail_image_url,
      director_id,
      opening_date,
      film_rating_id,
      running_time,
      country,
      score_card,
      created_at,
      updated_at
    ) VALUES ?`,
    [data]
  );
};

const createActors = (actorList) => {
  const data = [];

  for (const actor of actorList) {
    data.push([actor.id, actor.name]);
  }

  return appDataSource.query(
    `
    INSERT INTO actors (
      id,
      name
    ) VALUES ?`,
    [data]
  );
};

const createActorMovie = (actorMovieList) => {
  const data = [];
  for (const actorMovie of actorMovieList) {
    data.push([actorMovie.id, actorMovie.movie_id, actorMovie.actor_id]);
  }

  return appDataSource.query(
    `INSERT INTO movies_actors (
      id,
      movie_id,
      actor_id
    ) VALUES ?`,
    [data]
  );
};

const createKeywords = (keywordList) => {
  const data = [];

  for (const keyword of keywordList) {
    data.push([keyword.id, keyword.keyword]);
  }

  return appDataSource.query(
    `
    INSERT INTO movie_keywords (
      id,
      keyword
    ) VALUES ?`,
    [data]
  );
};

const createKeywordMovie = (keywordMovieList) => {
  const data = [];

  for (const keywordMovie of keywordMovieList) {
    data.push([
      keywordMovie.id,
      keywordMovie.movie_id,
      keywordMovie.movie_keyword_id,
    ]);
  }

  return appDataSource.query(
    `
    INSERT INTO movies_movie_keywords (
      id,
      movie_id,
      movie_keyword_id
    ) VALUES ?`,
    [data]
  );
};

const creatGenres = (genreList) => {
  const data = [];

  for (const genre of genreList) {
    data.push([genre.id, genre.genre]);
  }

  return appDataSource.query(
    `
    INSERT INTO genres (
      id,
      genre
    ) VALUES ?`,
    [data]
  );
};

const createGenreMovie = (genreMovieList) => {
  const data = [];

  for (genreMovie of genreMovieList) {
    data.push([genreMovie.id, genreMovie.movie_id, genreMovie.genre_id]);
  }

  return appDataSource.query(
    `INSERT INTO movies_genres (
      id,
      movie_id,
      genre_id
    ) VALUES ?`,
    [data]
  );
};

const createMovieImgs = (movieImgList) => {
  const data = [];

  for (const movieImg of movieImgList) {
    data.push([movieImg.id, movieImg.image_url, movieImg.movie_id]);
  }

  return appDataSource.query(
    `
    INSERT INTO movie_images (
      id, 
      image_url,
      movie_id
    ) VALUES ?`,
    [data]
  );
};

const createMovieVideos = (movieVideoList) => {
  const data = [];

  for (const movieVideo of movieVideoList) {
    data.push([movieVideo.id, movieVideo.video_url, movieVideo.movie_id]);
  }

  return appDataSource.query(
    `
    INSERT INTO movie_videos (
      id,
      video_url,
      movie_id
    ) VALUES ?`,
    [data]
  );
};

module.exports = {
  createDirectors,
  createFilmRatings,
  createMovies,
  createKeywords,
  createKeywordMovie,
  creatGenres,
  createGenreMovie,
  createActors,
  createActorMovie,
  createMovieImgs,
  createMovieVideos,
};
