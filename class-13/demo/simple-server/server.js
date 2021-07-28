'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3333;

app.use(cors());
// in order to pass req.body information over the internet
// you must add the following app.use line:
app.use(express.json());

// in order to hit this route:
// the req.method must be "GET"
// and the request must be made to:
// http://localhost:3333/something
app.get('/something', (req, res) => {
  res.status(200).send('this something route worked!');
});

// in order to hit this route:
// the req.method must be "POST"
// and the request must be made to:
// http://localhost:3333/add-something
app.post('/add-something', (req, res) => {
  // in order to get the data that is being sent from the client
  // it must be attached to the req.body
  // and then we can access that in this route
  console.log('the stuff i am sending over from the client', req.body);
});

app.delete('/delete-something', (req, res) => {
  console.log('hit the delete route');
});

app.put('/delete-something', (req, res) => {
  console.log('hit the put route');
});

app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
})