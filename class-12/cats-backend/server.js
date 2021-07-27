'use strict';

// TODAY is about CRUD ->         Create Read Update Delete -> these are database actions
// The above DB actions map to    POST   GET  PUT    DELETE    in REST

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const CatParent = require('./models/Cat.js');
const app = express();
const PORT = process.env.PORT || 3333;

// these are default options, just use them do not read into them
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }

// connect us to our db names "new-cats-db" which is running on the MongoDB
// process, and that runs on localhost:27017
mongoose.connect('mongodb://localhost:27017/cats-database', mongooseOptions);

app.use(cors());

// example creation of a cat and a save to the db (this is called a CREATE operation)
let bob = new CatParent({ name: 'bobcat', cats: [ { name: 'bobcat kid'} ]})
bob.save(); // .save() is the way we CREATE a new record and persist it in our MongoDB database


// REVIEW: these concepts to help understand the connection between our server and our database actions

// app.post('/endpoint', (req, res) => {
//   ModelName.save()
//     .then(record => {
//       // do something with record
//     })
// });

// app.get('/endpoint', (req, res) => {
//   ModelName.find({})
//     .then(records => {
//       // do something with the records from the DB
//     })
// });

// ========== AREA OF FOCUS ========= //
app.get('/cats', getAllCats);

function getAllCats(req, res) {
  CatParent.find({})
    .then(cats => {
      res.json(cats);
    })
}
// ================================== //

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`)
});