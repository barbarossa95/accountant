const express = require('express'),
  { parseJwt, shouldAuth } = require('../../middleware'),
  UserModel = require('../../models/user'),
  { RESTRICTED_FIELDS } = UserModel,
  router = express.Router();

router
  .post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ message: 'Имя пользователя и пароль обязательные поля' });
    }

    UserModel.register(username, password)
      .then(UserModel.createToken)
      .then(({ user, token }) =>
        res.json({
          token,
          user: user.omit(RESTRICTED_FIELDS),
        })
      )
      .catch(e => {
        console.error(e);
        res.status(400).json({ message: e.message });
      });
  })
  .post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ message: 'Имя пользователя и пароль обязательные поля' });
    }

    UserModel.checkCredentials(username, password)
      .then(UserModel.createToken)
      .then(({ token, user }) =>
        res.json({
          token,
          user: user.omit(RESTRICTED_FIELDS),
        })
      )
      .catch(e => {
        console.error(e);
        res.status(500).json({ message: e.message });
      });
  })
  .get('/', parseJwt, shouldAuth, (req, res) => res.json(req.payload.user));

module.exports = router;
