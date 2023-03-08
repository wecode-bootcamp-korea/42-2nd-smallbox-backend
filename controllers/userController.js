const userService = require('../services/userService');
const { catchAsync } = require('../utils/error');

const kakaoLogin = catchAsync(async (req, res) => {
  const kakaoToken = req.headers.authorization;

  if (!kakaoToken) throw new Error('missingAuthCode');

  const { statusCode, accessToken } = await userService.kakaoLogin(kakaoToken);

  res.status(statusCode).json({ accessToken });
});

module.exports = {
  kakaoLogin,
};
