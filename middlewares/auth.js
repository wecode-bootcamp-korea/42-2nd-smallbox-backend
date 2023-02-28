const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      const err = new Error('NEED ACCESS TOKEN');
      err.code = 400;
      throw err;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.userId;

    return next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Access Token' });
  }
};

module.exports = {
  validateToken,
};
