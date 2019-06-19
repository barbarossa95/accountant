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
    const { amount, description, timestamp, type } = req.body;

    OperationModel.create({
      amount,
      description,
      timestamp,
      type,
    })
      .then(operation => res.json(operation))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  })
  .delete('/:id', (req, res) => {
    const { id = null } = req.params;
    operationRepo
      .remove(id)
      .then(() => res.sendStatus(204))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  });

module.exports = router;
