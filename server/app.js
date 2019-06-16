const express = require('express');
const path = require('path');
const pino = require('express-pino-logger');

const apiRouter = require('./routes/api');

const app = express();

app.use(pino());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api', apiRouter);

app.use(function(req, res, next) {
  res.redirect('/');
});

module.exports = app;
