const express = require("express"),
  router = express.Router(),
  Operation = require("../../models/Operation"),
  operationManager = new Operation();

router
  .get("/", function(req, res) {
    try {
      operationManager.list().then(data => res.json(data));
    } catch (error) {
      res.sendStatus(500);
    }
  })
  .post("/", function(req, res) {
    const data = req.body,
      key = operationManager.create(data);

    res.json({ ...data, id: key });
  })
  .delete("/:id", function(req, res) {
    try {
      const id = req.params.id;

      operationManager.remove(id).then(() => res.sendStatus(204));
    } catch (error) {
      res.sendStatus(500);
    }
  });

module.exports = router;
