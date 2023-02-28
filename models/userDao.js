const appDataSource = require('./dataSource');

const checkRegisteredAlready = async (kakaoId) => {
  const [res] = await appDataSource.query(
    `
          SELECT EXISTS(
              SELECT id FROM users
              WHERE social_id = ?
          ) AS registered
          `,
    [kakaoId]
  );

  return !!parseInt(res.registered);
};

const createKakaoUser = async (
  kakaoId,
  email,
  profileImage,
  nickname,
  ageRange,
  birthday,
  gender
) => {
  const socialTypes = Object.freeze({
    KAKAO: 1,
    NAVER: 2,
    GOOGLE: 3,
  });

  await appDataSource.query(
    `
    INSERT INTO users(
      social_id,
      social_type_id,
      account_email,
      profile_image,
      profile_nickname,
      age_range,
      birthday,
      gender
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    );`,
    [
      kakaoId,
      socialTypes.KAKAO,
      email,
      profileImage,
      nickname,
      ageRange,
      birthday,
      gender,
    ]
  );
};

module.exports = {
  checkRegisteredAlready,
  createKakaoUser,
};
