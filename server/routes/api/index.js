const express = require('express');
const router = express.Router();

const operationRouter = require('./operation');
const authRouter = require('./auth');

router.use('/operation', operationRouter);
router.use('/auth', authRouter);

module.exports = router;
