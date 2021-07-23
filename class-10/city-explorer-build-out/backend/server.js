'use strict';

require('dotenv').config(); // pulls in project specific env variables from .env file

const express = require('express');
const cors = require('cors');
const getMovies = require('./modules/movies.js');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());

// TODO: built routes for incoming requests
app.get('/movies', movieHandler);

// TODO: plug in 404 error handling
app.use('*', notFoundHandler);

function movieHandler(req, res) {
  const location = req.query.city;

  getMovies(location)
    .then(moviesList => res.send(moviesList))
    .catch(err => console.error(err));
}

function notFoundHandler(req, res) {
  res.status(404).send('route not found');
}

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})