'use strict';

const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: { type: String, required: true }
})

const kittySchema = new mongoose.Schema({
  name: { type: String, required: true },
  cats: [catSchema]
})

// mongoose.model creates the actual collection the MongoDB database
                            // collection  // blueprint (aka schema)
module.exports = mongoose.model('kitties', kittySchema);