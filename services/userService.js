const jwt = require('jsonwebtoken');
const axios = require('axios');

const userDao = require('../models/userDao');

const kakaoLogin = async (kakaoToken) => {
  const getKakaoUserData = await axios.get(
    'https://kapi.kakao.com/v2/user/me',
    {
      headers: {
        Authorization: `Bearer ${kakaoToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  const userId = getKakaoUserData.data.id;
  const { profile_image: profileImage, nickname } =
    getKakaoUserData.data.properties;
  const {
    email,
    gender,
    age_range: ageRange,
    birthday,
  } = getKakaoUserData.data.kakao_account;

  const isExist = await userDao.checkRegisteredAlready(userId);

  const response = {
    accessToken: '',
    statusCode: 0,
  };

  const jwtAccessToken = (Object, statusCode) => {
    response.accessToken = jwt.sign(Object, process.env.JWT_SECRET, {
      algorithm: process.env.ALGORITHM,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    response.statusCode = statusCode;
    return [response.accessToken, response.statusCode];
  };

  if (!isExist) {
    await userDao.createKakaoUser(
      userId,
      email,
      profileImage,
      nickname,
      ageRange,
      birthday,
      gender
    );

    jwtAccessToken({ id: userId }, 201);
  } else {
    jwtAccessToken({ id: isExist.social_id }, 200);
  }

  return response;
};

module.exports = {
  kakaoLogin,
};
