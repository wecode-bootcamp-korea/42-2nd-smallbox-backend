const request = require('supertest');

const { createApp } = require('../app');
const appDataSource = require('../models/dataSource');
const movieFixture = require('./fixtures/movie-fixture');
const testMovieData = require('./data/movieData');

describe('GET movies', () => {
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

  test('SUCCESS : get all movies', async () => {
    const response = await request(app).get('/movies');

    expect(response.statusCode).toEqual(200);
    expect(response.body.getMovies).toHaveLength(15);
    expect(response.body.getMovies).toEqual(getAllMovies);
  });

  test('SUCCESS : get main movies ordered by openingASC', async () => {
    const response = await request(app)
      .get('/movies')
      .query({ main: 1, release: 1, sort: 'openingAsc' });

    expect(response.statusCode).toEqual(200);
    expect(response.body.getMovies).toHaveLength(5);
    expect(response.body.getMovies).toEqual(getMainMoviesWithOrder);
  });

  test('SUCCESS : get movie details by id', async () => {
    const response = await request(app)
      .get('/movies/detail')
      .query({ movieId: 1 });

    expect(response.statusCode).toEqual(200);
    expect(response.body.getMovieDetail).toHaveLength(1);
    expect(response.body.getMovieDetail).toEqual(getMoveDetailIdOne);
  });
});

const getAllMovies = [
  {
    movieName: '엔드 오브 애프터글로우',
    movieNameInEnglish: 'End of Afterglow',
    movieSimpleDescription:
      "End of Afterglow'는 인생의 후회와 죄책감, 그리고 다시 찾은 희망을 그린 감동적인 인생 드라마이다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster14.png?raw=true',
    movieOpeningDate: `2023-02-27`,
    filmAgeRating: '15',
    movieKeyword: ['불안한', '무서운', '냉정한'],
  },
  {
    movieName: '섀도우 플레이',
    movieNameInEnglish: 'Shadow Play',
    movieSimpleDescription:
      '어둠과 빛의 조합으로 펼쳐지는 흑백 판타지 영화입니다. 무대 위에서 펼쳐지는 그림자 연극과 함께 펼쳐지는 인물들의 이야기를 담고 있습니다.',
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster11.png?raw=true',
    movieOpeningDate: '2023-02-26',
    filmAgeRating: '15',
    movieKeyword: ['냉정한', '웅장한', '비극적인'],
  },
  {
    movieName: '언젠가 서울',
    movieNameInEnglish: 'Seoul someday',
    movieSimpleDescription:
      '한 여성의 서울에서의 인생 여정을 그린 감성적인 드라마',
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster15.png?raw=true',
    movieOpeningDate: '2023-02-24',
    filmAgeRating: '12',
    movieKeyword: ['감성적인', '낭만적인', '감미로운'],
  },
  {
    movieName: '벚꽃이 지나는 길',
    movieNameInEnglish: 'Cherry Blossom Road',
    movieSimpleDescription:
      "'벚꽃이 지나는 길'은 첫사랑과 이별, 성장 등을 그린 감성적인 멜로드라마입니다. 주인공들은 각자의 이유로 헤어져야 하지만, 서로를 지우지 못하고 끝없이 그리워하며 인생의 여정을 떠나게 됩니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster6.png?raw=true',
    movieOpeningDate: '2023-02-20',
    filmAgeRating: '18',
    movieKeyword: ['로맨틱한', '감미로운', '감성적인'],
  },
  {
    movieName: '한강에는 비가 내린다',
    movieNameInEnglish: "It's raining on the Han River",
    movieSimpleDescription:
      '서로 다른 사람들의 이야기를 가진 인물들이 모여 있는 한강을 배경으로 하는 감성적인 영화입니다.',
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster3.png?raw=true',
    movieOpeningDate: '2023-02-19',
    filmAgeRating: 'ALL',
    movieKeyword: ['감동적인', '희망적인', '슬픈'],
  },
  {
    movieName: '꿈의 문',
    movieNameInEnglish: 'Dream Door',
    movieSimpleDescription:
      '현실과 꿈의 경계가 희미해지면서 벌어지는 일들을 그린 판타지 영화입니다.',
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster4.png?raw=true',
    movieOpeningDate: '2023-02-19',
    filmAgeRating: '12',
    movieKeyword: ['냉정한', '역동적인', '감성적인'],
  },
  {
    movieName: '단편시선',
    movieNameInEnglish: 'Short Sight',
    movieSimpleDescription:
      "'단편시선'은 다양한 단편 영화들을 하나의 이야기로 연결한 옴니버스 형태의 영화입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster10.png?raw=true',
    movieOpeningDate: '2023-02-16',
    filmAgeRating: '15',
    movieKeyword: ['감성적인', '낭만적인', '감미로운'],
  },
  {
    movieName: '모래성',
    movieNameInEnglish: 'Sand Castle',
    movieSimpleDescription:
      '모래성은 귀신이 나타나는 오컬트적인 요소를 담고 있는 공포 영화입니다.',
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster5.png?raw=true',
    movieOpeningDate: '2023-02-15',
    filmAgeRating: '18',
    movieKeyword: ['비극적인', '무서운', '괴상한'],
  },
  {
    movieName: '에밀리의 불행한 여름',
    movieNameInEnglish: "Emily's Unfortunate Summer",
    movieSimpleDescription:
      "'에밀리의 불행한 여름'은 청소년 소설작가 에밀리의 성장 이야기를 그린 영화입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster9.png?raw=true',
    movieOpeningDate: '2023-02-14',
    filmAgeRating: '15',
    movieKeyword: ['감성적인', '자극적인', '비극적인'],
  },
  {
    movieName: '잠 못 이루는 밤',
    movieNameInEnglish: 'White Night',
    movieSimpleDescription:
      '한 여성이 자신의 아름다움에 대한 갈등과 불안으로 인해 잠을 이루지 못하는 이야기. 이 여성은 자신의 외모와 사회의 기대, 그리고 자신의 내면과의 갈등 속에서 존재감을 찾으려고 노력한다.',
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster1.png?raw=true',
    movieOpeningDate: '2023-02-13',
    filmAgeRating: '12',
    movieKeyword: ['로맨틱한', '몽환적인', '낭만적인'],
  },
  {
    movieName: '유령의 새벽',
    movieNameInEnglish: 'Dawn of Ghosts',
    movieSimpleDescription:
      "'유령의 새벽'은 지하 도시에서 일어나는 이상한 사건들을 다룬 영화입니다. 이야기의 중심에는 한 여자의 이상한 꿈과 그 꿈에서 일어나는 일들이 포함되어 있습니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster2.png?raw=true',
    movieOpeningDate: '2023-02-10',
    filmAgeRating: '18',
    movieKeyword: ['짜릿한', '웅장한', '불안한'],
  },
  {
    movieName: '바다의 흔적',
    movieNameInEnglish: 'Deep Blue Sea',
    movieSimpleDescription:
      "'바다의 흔적'은 이야기꾼으로 유명한 주인공이, 세계 각지의 모험을 떠나며 발견하는 여러 비밀과 마주하는 모험을 그린 영화입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster8.png?raw=true',
    movieOpeningDate: '2023-02-06',
    filmAgeRating: '12',
    movieKeyword: ['감성적인', '몽환적인', '감동적인'],
  },
  {
    movieName: '방랑자',
    movieNameInEnglish: 'Wanderer',
    movieSimpleDescription:
      "'방랑자'는 세상에서 외면받은 혼자서 살아가는 주인공이, 자신의 숨겨진 능력을 발견하게 되면서 벌어지는 모험을 그린 영화입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster7.png?raw=true',
    movieOpeningDate: '2023-02-02',
    filmAgeRating: '18',
    movieKeyword: ['냉정한', '무서운', '불안한'],
  },
  {
    movieName: '선키스드 드림',
    movieNameInEnglish: 'Sun Kissed Dream',
    movieSimpleDescription:
      "'선키스드 드림'은 섬세하고 아름다운 로맨스 이야기입니다. 태양과 바다, 사랑 그리고 운명의 이야기를 담고 있습니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster12.png?raw=true',
    movieOpeningDate: '2023-01-30',
    filmAgeRating: '12',
    movieKeyword: ['감성적인', '낭만적인', '희망적인'],
  },
  {
    movieName: '민환의 초상',
    movieNameInEnglish: "Minhwan's Portrait",
    movieSimpleDescription:
      "'민환의 초상'은 천재 예술가 민환의 인생과 작품을 그린 감동적인 인물드라마입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster13.png?raw=true',
    movieOpeningDate: '2023-01-28',
    filmAgeRating: '12',
    movieKeyword: ['역동적인', '몽환적인', '냉정한'],
  },
];

const getMainMoviesWithOrder = [
  {
    movieName: '민환의 초상',
    movieNameInEnglish: "Minhwan's Portrait",
    movieSimpleDescription:
      "'민환의 초상'은 천재 예술가 민환의 인생과 작품을 그린 감동적인 인물드라마입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster13.png?raw=true',
    movieOpeningDate: '2023-01-28',
    filmAgeRating: '12',
    movieKeyword: ['역동적인', '몽환적인', '냉정한'],
  },
  {
    movieName: '선키스드 드림',
    movieNameInEnglish: 'Sun Kissed Dream',
    movieSimpleDescription:
      "'선키스드 드림'은 섬세하고 아름다운 로맨스 이야기입니다. 태양과 바다, 사랑 그리고 운명의 이야기를 담고 있습니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster12.png?raw=true',
    movieOpeningDate: '2023-01-30',
    filmAgeRating: '12',
    movieKeyword: ['감성적인', '낭만적인', '희망적인'],
  },
  {
    movieName: '방랑자',
    movieNameInEnglish: 'Wanderer',
    movieSimpleDescription:
      "'방랑자'는 세상에서 외면받은 혼자서 살아가는 주인공이, 자신의 숨겨진 능력을 발견하게 되면서 벌어지는 모험을 그린 영화입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster7.png?raw=true',
    movieOpeningDate: '2023-02-02',
    filmAgeRating: '18',
    movieKeyword: ['냉정한', '무서운', '불안한'],
  },
  {
    movieName: '바다의 흔적',
    movieNameInEnglish: 'Deep Blue Sea',
    movieSimpleDescription:
      "'바다의 흔적'은 이야기꾼으로 유명한 주인공이, 세계 각지의 모험을 떠나며 발견하는 여러 비밀과 마주하는 모험을 그린 영화입니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster8.png?raw=true',
    movieOpeningDate: '2023-02-06',
    filmAgeRating: '12',
    movieKeyword: ['감성적인', '몽환적인', '감동적인'],
  },
  {
    movieName: '유령의 새벽',
    movieNameInEnglish: 'Dawn of Ghosts',
    movieSimpleDescription:
      "'유령의 새벽'은 지하 도시에서 일어나는 이상한 사건들을 다룬 영화입니다. 이야기의 중심에는 한 여자의 이상한 꿈과 그 꿈에서 일어나는 일들이 포함되어 있습니다.",
    movieThumbnailImageUrl:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster2.png?raw=true',
    movieOpeningDate: '2023-02-10',
    filmAgeRating: '18',
    movieKeyword: ['짜릿한', '웅장한', '불안한'],
  },
];

const getMoveDetailIdOne = [
  {
    movieName: '잠 못 이루는 밤',
    movieNameInEnligh: 'White Night',
    movieSimpleDescription:
      '한 여성이 자신의 아름다움에 대한 갈등과 불안으로 인해 잠을 이루지 못하는 이야기. 이 여성은 자신의 외모와 사회의 기대, 그리고 자신의 내면과의 갈등 속에서 존재감을 찾으려고 노력한다.',
    movieDetailDescription:
      '이 여성은 자신의 외모에 대한 인식이 매우 왜곡되어 있습니다. 그녀는 매우 아름다운 외모를 가지고 있지만, 그녀가 자신을 보는 시선은 매우 부정적입니다. 이는 그녀가 어릴 때부터 부모님, 친구들, 그리고 사회의 여러 영향으로부터 내면화된 것입니다. 그녀는 이러한 갈등 속에서 완벽한 아름다움을 추구하면서도, 그녀 자신이 원하는 삶과 행복을 찾으려고 노력합니다. 이 영화는 아름다움의 개념과 그것이 인간의 삶에 미치는 영향에 대한 진지하고 감동적인 메시지를 담고 있습니다.',
    movieTumbNailImg:
      'https://github.com/jangjuseong/small_box-img-repo/blob/main/smallbox_%ED%8F%AC%EC%8A%A4%ED%84%B0%EC%83%98%ED%94%8C%2015%EC%A2%85/poster1.png?raw=true',
    movieOpeningDate: '2023-02-13',
    movieAgeRating: '12',
    movieRunningTime: '125분',
    country: '미국',
    scoreCard: 8,
    director: '라이언 존슨',
    movieActors: ['사만다 미셸', '루카스 피터슨', '에밀리 레이놀즈'],
    movieKeyword: ['로맨틱한', '몽환적인', '낭만적인'],
    moiveGenre: ['로맨스', '멜로'],
    movieStillCut: ['잠 못 이루는 밤 이미지url', '잠 못 이루는 밤 이미지url2'],
    movieTrailer: [
      '잠 못 이루는 밤 비디오url',
      '잠 못 이루는 밤 비디오url2',
      '잠 못 이루는 밤 비디오url3',
    ],
  },
];
