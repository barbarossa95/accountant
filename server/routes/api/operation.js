const express = require('express'),
  router = express.Router(),
  Operation = require('../../repositories/OperationRepo'),
  operationRepo = new Operation();

router
  .get('/', function(req, res) {
    operationRepo
      .get()
      .then(data => res.json(data))
      .catch(e => console.error(e));
  })
  .post('/', function(req, res) {
    const data = req.body;

    operationRepo
      .create(data)
      .then(operation => res.json({ operation }))
      .catch(e => console.error(e));
  })
  .delete('/:key', function(req, res) {
    try {
      const { key = null } = req.params;

      operationRepo.remove(key).then(() => res.sendStatus(204));
    } catch (error) {
      e => console.error(e);
    }
  });

module.exports = router;
