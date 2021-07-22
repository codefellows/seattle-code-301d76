'use strict';
const axios = require('axios');

function getPokemon(req, res) {
  const url = 'http://pokeapi.co/api/v1/pokemon';

  axios.get(url)
    .then(data => {
      console.log('data from jobs api', data.data);
      const formatted = data.data.results.map(pokemon => new Pokemon(pokemon));
      res.status(200).send(formatted);
    })
    .catch(err => {
      console.error(err); // this logs on the server
      res.status(500).send('sorry, we were not able to gather the data you requested')
    })
}

class Pokemon {
  constructor(obj) {
    this.name = obj.name;
    this.url = obj.url;
  }
}

module.exports = getPokemon;