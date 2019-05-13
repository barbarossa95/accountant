const express = require('express'),
  router = express.Router(),
  operationManager = require('../../models/Operation');

router
  .get('/', function(req, res) {
    try {
      operationManager.list().then(data => res.json(data));
    } catch (error) {
      res.sendStatus(500);
    }
  })
  .post('/', function(req, res) {
    const data = req.body;

    operationManager
      .create(data)
      .then(operation => res.json({ operation }))
      .catch(e => console.error(e));
  })
  .delete('/:id', function(req, res) {
    try {
      const id = req.params.id;

      operationManager.remove(id).then(() => res.sendStatus(204));
    } catch (error) {
      res.sendStatus(500);
    }
  });

module.exports = router;
