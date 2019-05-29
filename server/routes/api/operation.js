const { parseJwt, shouldAuth } = require('../../middleware'),
  express = require('express'),
  router = express.Router(),
  Operation = require('../../repositories/OperationRepo'),
  operationRepo = new Operation();

router
  .use(parseJwt, shouldAuth)
  .get('/', function(req, res) {
    operationRepo
      .get()
      .then(data => res.json(data))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  })
  .post('/', function(req, res) {
    const data = req.body;

    operationRepo
      .create(data)
      .then(operation => res.json({ operation }))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  })
  .delete('/:key', function(req, res) {
    const { key = null } = req.params;
    operationRepo
      .remove(key)
      .then(() => res.sendStatus(204))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  });

module.exports = router;
