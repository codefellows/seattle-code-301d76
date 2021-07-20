'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(cors());

// this is one of the cases where you WOULD NOT
// put this env variable into Netlify / Heroku / etc
const PORT = process.env.PORT || 3001;

app.get('/shoppinglist', (req, res) => {
  let list = ['hat', 'tshirt', 'fake orange', 'peanuts', 'beer', 'snacks'];
  res.status(200).send(list);
});

app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
});