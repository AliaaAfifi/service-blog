const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'vkbhd9HNqpz46ePwq6pKaWJz1ME7GXnJQqRXIpTqNmOp8BJR2Ya4uyPoYQlGHdX');

    req.user = decodedToken.tokenData.uuid;
    next();
  } catch {
    res.status(401).json({
      errorMsg: 'Authentication required!',
    });
  }
};

module.exports = userAuth;
