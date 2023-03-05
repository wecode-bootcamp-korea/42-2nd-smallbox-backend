const messages = {
  keyErr: {
    statusCode: 400,
    message: 'KEY_ERROR',
  },

  noAuthorizationErr: {
    statusCode: 400,
    message: 'NO_AUTHORIZATION',
  },

  invalidAccessTokenErr: {
    statusCode: 400,
    message: 'INVALID_ACCESS_TOKEN',
  },

  failedToSignUpErr: {
    statusCode: 400,
    message: 'FAILED_TO_SIGNUP',
  },

  pwCheckErr: {
    statusCode: 400,
    message: 'INVALID_PASSWORD',
  },

  failedToLoginErr: {
    statusCode: 400,
    message: 'FAILED_TO_LOGIN',
  },
};

module.exports = messages;
