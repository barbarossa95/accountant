const express = require('express'),
  { json, urlencoded } = express,
  path = require('path'),
  pino = require('express-pino-logger'),
  apiRouter = require('./routes/api'),
  app = express();

app.use(pino());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/api', apiRouter);

// Redirect all other requests to main page
app.use((req, res, next) => res.redirect('/'));

module.exports = app;
