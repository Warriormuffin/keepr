import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String},
  body: {type: String, required: true},
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  // author: {type: String, ref: models.user.username, required: true},
  author: {type: String, required: true},
  keepCount: {type: Number, defualt: 0},
  shareCount: {type: Number, defualt: 0},
  viewCount: {type: Number, defualt: 0}
  // vaultIds: [{type: ObjectId, ref: models.vault.name, required: true}]
});

module.exports = mongoose.model(models.keep.name, schema);