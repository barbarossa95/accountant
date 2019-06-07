const { Router } = require('express'),
  { parseJwt, shouldAuth } = require('../../middleware'),
  OperationModel = require('../../models/operation'),
  Operation = require('../../repositories/OperationRepo'),
  operationRepo = new Operation(),
  router = Router();

router
  .use(parseJwt, shouldAuth)
  .get('/', (req, res) => {
    OperationModel.find({})
      .exec()
      .then(operation => res.json(operation))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  })
  .post('/', (req, res) => {
    const data = req.body;

    operationRepo
      .create(data)
      .then(operation => res.json({ operation }))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  })
  .delete('/:key', (req, res) => {
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
