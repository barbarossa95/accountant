const jwt = require('jsonwebtoken');

const parseJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.EXPRESS_AUTH_SECRET, (error, payload) => {
      if (error) {
        console.error(error);

        return next();
      }

      if (payload) {
        req.user = payload;

        return next();
      }

      return next();
    });
  } catch (e) {
    console.error('eRROR');
    console.error(e);

    return next();
  }
};

const shouldAuth = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    res
      .status(500)
      .json({ error: 'login is required' })
      .end();
  }
};

module.exports = {
  parseJwt,
  shouldAuth,
};
