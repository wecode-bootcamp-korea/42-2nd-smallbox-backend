const request = require('supertest');

const { createApp } = require('../app');
const appDataSource = require('../models/dataSource');
const movieFixture = require('./fixtures/movie-fixture');
const testMovieData = require('./data/movieData');

describe('GET ticketing options', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
    await movieFixture.createDirectors(testMovieData.directors);
    await movieFixture.createFilmRatings(testMovieData.filmRatings);
    await movieFixture.createMovies(testMovieData.movies);
    await movieFixture.createActors(testMovieData.actors);
    await movieFixture.createActorMovie(testMovieData.actorMovies);
    await movieFixture.createKeywords(testMovieData.keywords);
    await movieFixture.createKeywordMovie(testMovieData.keywordMovies);
    await movieFixture.creatGenres(testMovieData.genres);
    await movieFixture.createGenreMovie(testMovieData.genreMovies);
    await movieFixture.createMovieImgs(testMovieData.movieImgs);
    await movieFixture.createMovieVideos(testMovieData.movieVideos);
  });

  afterAll(async () => {
    await appDataSource.query('SET FOREIGN_KEY_CHECKS=0');
    await appDataSource.query(`TRUNCATE directors`);
    await appDataSource.query(`TRUNCATE film_ratings`);
    await appDataSource.query(`TRUNCATE movies`);
    await appDataSource.query(`TRUNCATE actors`);
    await appDataSource.query(`TRUNCATE movies_actors`);
    await appDataSource.query(`TRUNCATE movie_keywords`);
    await appDataSource.query(`TRUNCATE movies_movie_keywords`);
    await appDataSource.query(`TRUNCATE genres`);
    await appDataSource.query(`TRUNCATE movies_genres`);
    await appDataSource.query(`TRUNCATE movie_images`);
    await appDataSource.query(`TRUNCATE movie_videos`);
    await appDataSource.query('SET FOREIGN_KEY_CHECKS=1');
    await appDataSource.destroy();
  });

  test('SUCCESS: get all movie options ordered by name ASC', async () => {
    const options = {
      movies: [
        {
          id: 4,
          movieTitle: '꿈의 문',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster4.png?raw=true',
          releaseDate: '2023-02-19',
          rating: '12',
        },
        {
          id: 10,
          movieTitle: '단편시선',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster10.png?raw=true',
          releaseDate: '2023-02-15',
          rating: '15',
        },
        {
          id: 5,
          movieTitle: '모래성',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster5.png?raw=true',
          releaseDate: '2023-02-15',
          rating: '18',
        },
        {
          id: 13,
          movieTitle: '민환의 초상',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster13.png?raw=true',
          releaseDate: '2023-01-28',
          rating: '12',
        },
        {
          id: 8,
          movieTitle: '바다의 흔적',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster8.png?raw=true',
          releaseDate: '2023-02-06',
          rating: '12',
        },
        {
          id: 7,
          movieTitle: '방랑자',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster7.png?raw=true',
          releaseDate: '2023-02-02',
          rating: '18',
        },
        {
          id: 6,
          movieTitle: '벚꽃이 지나는 길',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster6.png?raw=true',
          releaseDate: '2023-02-20',
          rating: '18',
        },
        {
          id: 11,
          movieTitle: '섀도우 플레이',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster11.png?raw=true',
          releaseDate: '2023-02-26',
          rating: '15',
        },
        {
          id: 12,
          movieTitle: '선키스드 드림',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster12.png?raw=true',
          releaseDate: '2023-01-30',
          rating: '12',
        },
        {
          id: 15,
          movieTitle: '언젠가 서울',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster15.png?raw=true',
          releaseDate: '2023-02-24',
          rating: '12',
        },
        {
          id: 9,
          movieTitle: '에밀리의 불행한 여름',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster9.png?raw=true',
          releaseDate: '2023-02-14',
          rating: '15',
        },
        {
          id: 14,
          movieTitle: '엔드 오브 애프터글로우',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster14.png?raw=true',
          releaseDate: '2023-02-27',
          rating: '15',
        },
        {
          id: 2,
          movieTitle: '유령의 새벽',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster2.png?raw=true',
          releaseDate: '2023-02-10',
          rating: '18',
        },
        {
          id: 1,
          movieTitle: '잠 못 이루는 밤',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster1.png?raw=true',
          releaseDate: '2023-02-13',
          rating: '12',
        },
        {
          id: 3,
          movieTitle: '한강에는 비가 내린다',
          movieThumbnail:
            'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster3.png?raw=true',
          releaseDate: '2023-02-19',
          rating: 'ALL',
        },
      ],
      timetables: [
        {
          movieId: 1,
          timetableId: 1,
          date: '2023-03-06',
          time: '08:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 2,
          timetableId: 2,
          date: '2023-03-06',
          time: '11:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 3,
          timetableId: 3,
          date: '2023-03-06',
          time: '14:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 4,
          timetableId: 4,
          date: '2023-03-06',
          time: '17:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 5,
          timetableId: 5,
          date: '2023-03-06',
          time: '23:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 6,
          timetableId: 6,
          date: '2023-03-06',
          time: '08:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 7,
          timetableId: 7,
          date: '2023-03-06',
          time: '11:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 8,
          timetableId: 8,
          date: '2023-03-06',
          time: '14:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 9,
          timetableId: 9,
          date: '2023-03-06',
          time: '17:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 10,
          timetableId: 10,
          date: '2023-03-06',
          time: '23:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 11,
          timetableId: 11,
          date: '2023-03-06',
          time: '08:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 12,
          timetableId: 12,
          date: '2023-03-06',
          time: '11:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 13,
          timetableId: 13,
          date: '2023-03-06',
          time: '14:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 14,
          timetableId: 14,
          date: '2023-03-06',
          time: '17:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
        {
          movieId: 15,
          timetableId: 15,
          date: '2023-03-06',
          time: '23:00:00',
          availableSeats: '0',
          totalSeats: '10',
        },
      ],
    };

    const response = await request(app).get('/ticketing');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(options);
  });
});
