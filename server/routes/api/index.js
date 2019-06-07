const { Router } = require('express'),
  operationRouter = require('./operation'),
  authRouter = require('./auth'),
  router = Router();

router.use('/operation', operationRouter);
router.use('/auth', authRouter);

module.exports = router;
