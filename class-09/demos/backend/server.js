'use strict';

require('dotenv').config();

// 3rd party npm packages
const express = require('express');
const cors = require('cors');

// internal modules (modules that we built)
const notFound = require('./routes/not-found.js');
const getPokemon = require('./routes/pokemon.js');
const PORT = process.env.PORT || 3333;

// setup app config
const app = express();

app.use(cors());

// setup routes
app.get('/pokemon', getPokemon);

app.use('*', notFound);
// listen for incoming traffic
app.listen(PORT, () => {
  console.log('server up', PORT);
});