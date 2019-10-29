const { Router } = require('express');
const { parseJwt, shouldAuth } = require('../../middleware');
const OperationModel = require('../../models/operation');
const router = Router();

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
  .delete('/:_id', (req, res) => {
    const { _id = null } = req.params;
    OperationModel.deleteOne({ _id })
      .then(({ ok }) => (ok ? res.sendStatus(204) : res.sendStatus(500)))
      .catch(e => {
        console.error(e);
        res.sendStatus(500);
      });
  });

module.exports = router;
