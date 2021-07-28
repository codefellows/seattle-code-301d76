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
mongoose.connect('mongodb://localhost:27017/todays-db', mongooseOptions);

// when making a POST or a PUT request, you must parse the req body
// the following express.json line does that for us
app.use(express.json());
app.use(cors());

// example creation of a cat and a save to the db (this is called a CREATE operation)
let bob = new CatParent({ name: 'bobcat', cats: [ { name: 'bobcat kid'} ]})
console.log(bob);
bob.save(); // .save() is the way we CREATE a new record and persist it in our MongoDB database

// REST has 4 primary methods = GET / POST / PUT / DELETE
// Today we are working with POST (which means add something to the app)
// For example:  post('/cats') probably means we want to add a cat to a list of cats
app.post('/cats', (req, res) => {
  let coolCat = new CatParent(req.body);
  coolCat.save()
    .then(result => {
      res.json(result);
    })
});

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



app.get('/cool')
app.post('/cool')