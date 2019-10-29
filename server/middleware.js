const jwt = require('jsonwebtoken');

const parseJwt = (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');

    jwt.verify(token, process.env.EXPRESS_AUTH_SECRET, (error, payload) => {
      if (error) {
        console.error('Request auth fail');

        return next();
      }

      if (payload) {
        req.user = payload;
        req.token = token;

        return next();
      }

      return next();
    });
  } catch (e) {
    console.error(e);

    return next();
  }
};

const shouldAuth = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    res.sendStatus(401).end();
  }
};

module.exports = {
  parseJwt,
  shouldAuth,
};
