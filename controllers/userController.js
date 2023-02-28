const userService = require('../services/userService');
const { catchAsync } = require('../utils/error');

const kakaoLogin = catchAsync(async (req, res) => {
  const kakaoToken = req.headers.authorization;
  if (!kakaoToken) {
    const err = new Error('missingAuthCode');
    err.statusCode = 401;
    throw err;
  }

  const { statusCode, accessToken } = await userService.kakaoLogin(kakaoToken);

  res.status(statusCode).json({ accessToken });
});

module.exports = {
  kakaoLogin,
};
