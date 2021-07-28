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

// NOTE FOR TODAY:
// these are the mongoose methods that are important to you:
// find({}) -> finds all things in a collection   (app.get)
// find({ name: 'whatever' }) -> find a specific thing in a collection, given a prop/value  (app.get)
// save() -> saves an item to the DB (CREATE)  (app.post)
// findByIdAndUpdate -> update an item, given an items id  (app.put)
// findByIdAndDelete -> deletes an item, given an items id  (app.delete)


// MATCHING PIECES:
// frontend needs to make a request to a backend that has a corresponding:
// REQUEST TYPE (GET, POST, PUT, DELETE)
// and ROUTE (/cats or /stuff or /whatever)

// these are default options, just use them do not read into them
const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }

// connect us to our db names "new-cats-db" which is running on the MongoDB
// process, and that runs on localhost:27017
mongoose.connect('mongodb://localhost:27017/cats-database', mongooseOptions);

app.use(express.json()); // this is required when making post/put requests
app.use(cors());

// connect the dots:
// this route talks to the addCat method in App.js
// in our demo cats frontend
app.post('/cats', (req, res) => {
  console.log(req.body);
  let kitty = new CatParent(req.body);
  kitty.save()
    .then(cat => {
      res.json(cat);
    })
})

// when you structure a backend route with a convention of :variable-name
// you have created a request parameter
// this is how an incoming request would look in order to capture this route:
// http://localhost:3001/cats/34583450985093845098340958340
app.delete('/cats/:id', (req, res) => {
  let id = req.params.id;
  CatParent.findByIdAndDelete(id) // findByIdAndDelete is given to us by Mongoose
    .then(() => res.json({ msg: 'cat deleted' }))
    .catch(err => console.error(err));
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