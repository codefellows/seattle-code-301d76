'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

const client = jwksClient({
  jwksUri: 'https://dev-3y13wdvq.us.auth0.com/.well-known/jwks.json'
});

function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

// TODO: build out auth response functionality
app.get('/auth-test', (req, res) => {
  // req.headers.headers.authorization = 'Bearer 0934ut0934j0309fm309m3409fm4309fn3409nf3490nf0934nf0934nf0934nf034nf0934n0f934n0fn'
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, getKey, {}, function(err, user) {
    if (err) {
      res.send('invalid token - you cannot access this route');
    } else {
      res.json({ 'token': token })
    }
  });
});

app.listen(PORT, () => {
  console.log(`server up ${PORT}`);
});