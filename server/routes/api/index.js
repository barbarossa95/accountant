var express = require("express");
var router = express.Router();

var operationRouter = require("./operation");

router.use("/operation", operationRouter);

module.exports = router;
