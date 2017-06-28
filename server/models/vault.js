import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type: String, required: true},
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  keepIds: [{type: ObjectId, ref: models.keep.name}]
});

module.exports = mongoose.model(models.vault.name, schema);