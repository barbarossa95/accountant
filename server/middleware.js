const jwt = require('jsonwebtoken');

const parseJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.EXPRESS_AUTH_SECRET, (error, payload) => {
      error && console.error(error);

      if (payload) {
        req.user = payload;
        next();
      }
      next();
    });
  } catch (e) {
    next();
  }
};

const shouldAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(500).json({ error: 'login is required' });
  }
};

module.exports = {
  parseJwt,
  shouldAuth,
};
