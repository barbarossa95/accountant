const express = require('express'),
  router = express.Router(),
  User = require('../../repositories/UserRepo'),
  userRepository = new User();

router
  .post('/register', function(req, res) {
    const { login, password } = req.body;

    if (!login || !password) {
      res.status(400).json({ message: 'login and password is required' });
    }

    userRepository
      .register(login, password)
      .then(user => userRepository.createToken(user))
      .then(({ user, token }) =>
        res.json({
          token,
          login: user.login,
          key: user.key,
        })
      )
      .catch(e => {
        console.error(e);
        res.status(400).json({ message: e.message });
      });
  })
  .post('/login', function(req, res) {
    const { login, password } = req.body;

    userRepository
      .checkCredentials(login, password)
      .then(({ user, token }) =>
        res.json({
          token,
          login: user.login,
          key: user.key,
        })
      )
      .catch(e => {
        console.error(e);
        res.status(403).json({ message: e.message });
      });
  });

module.exports = router;
