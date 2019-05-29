const { parseJwt, shouldAuth } = require('../../middleware'),
  express = require('express'),
  router = express.Router(),
  User = require('../../repositories/UserRepo'),
  userRepository = new User();

router
  .post('/register', function(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: 'username and password is required' });
    }

    userRepository
      .register(username, password)
      .then(userRepository.createToken)
      .then(({ user, token }) =>
        res.json({
          token,
          user: {
            name: user.name,
            key: user.key,
          },
        })
      )
      .catch(e => {
        console.error(e);
        res.status(400).json({ message: e.message });
      });
  })
  .post('/login', function(req, res) {
    const { username, password } = req.body;

    userRepository
      .checkCredentials(username, password)
      .then(userRepository.createToken)
      .then(({ token, user }) =>
        res.json({
          token,
          user: {
            name: user.name,
            id: user.key,
          },
        })
      )
      .catch(e => {
        console.error(e);
        res.status(403).json({ message: e.message });
      });
  });

module.exports = router;
