'use strict';

// dependencies
const express = require('express'); // express is used for building our routes and general server/API management
const dotenv = require('dotenv'); // pulls in enviornment variables from a .env file
const axios = require('axios'); // axios is a tool for making requests
const cors = require('cors'); // cors is used to limit/allow access from an ip

// application config
const app = express(); // are assigning express to app for quick method access (ie: app.get())
dotenv.config(); // this actually pulls in any variables you have assigned in a .env file

app.use(cors()); // open access to any incoming requester (and url/ip)
app.use(express.json()); // allow our app to accept req.body data

// application constants
const PORT = process.env.PORT || 3333;

// test route built before other routes, just to ensure this server works
app.get('/test', (req, res) => {
  res.send('test worked');
});

// TODO: built a route that will go grab photos from a 3rd party photo API
app.get('/photos', getPhotos);

// this is the last route in your server (for now)
app.get('*', notFoundHandler);

// FLOW example: client -> this server -> sends off a request to unsplash -> unsplash responds with photos -> now photos are in your server -> your server sends them back to client

// route handler
// http://localhost:3000/whatever/your/path?query=value
async function getPhotos(req, res) { 
  const searchQuery = req.query.query;
  const url = `https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_KEY}&query=${searchQuery}`;

  try {
    const results = await axios.get(url);
    // this logs on the backend
    console.log('unsplash results:', results);
    // res.send(results); - if we just send back the raw results, the client has to handle filtering/aggregation on the frontend
    // or we can build a custom/aggregated set of data and send that back instead of raw results
    const photoArray = results.data.map(photo => new Photo(photo));
    // build a response above, send the response here
    res.status(200).send(photoArray);
  } catch(err) {
    console.error('error info:', err);
  }
}

function notFoundHandler(req, res) {
  res.status(404).send('route not found - please check your spelling and try again');
}

class Photo {
  constructor(obj) {
    this.img_url = obj.urls.regular,
    this.original_image = obj.links.self,
    this.creator = obj.user.name
  }
}

// setup our server for incoming traffic on our defined port
app.listen(PORT, () => console.log(`server up ${PORT}`));