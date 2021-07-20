'use strict';

const express = require('express');
const app = express();

// capture a request coming into localhost:3000/test
app.get('/test', (req, res) => {
  // send a response back to the client with whatever you want
  res.send('test worked'); // this represents a basic web server route
});

app.get('/weather-test', (req, res) => {
  // in the future, this could live in a DB or on another API
  res.json({ city: 'seattle', currentTemp: 64, rain: false }) // this represents an API route
});

app.listen(3000, () => {
  console.log('server works on 3000');
});