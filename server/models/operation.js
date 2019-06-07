const { Schema, model } = require('mongoose'),
  operationSchema = new Schema({
    amount: Number,
    description: String,
    timestamt: String,
    type: String,
  }),
  MODEL_NAME = 'Operation';

operationSchema.statics = {};

module.exports = model(MODEL_NAME, operationSchema);
