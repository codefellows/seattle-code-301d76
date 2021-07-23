'use strict';

const axios = require('axios');
const cache = require('./cache.js');

// when we make a request to the movie api
// and it sends us a response, before we send our response back to the client
// lets save the results of the API call in an object for QUICK RETREIVAL
function getMovies(location) {
  const key = 'movies-' + location;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&query=${location}`;

  if(!cache[key]) {
    cache[key] = {}; // { movies-seattle: {} }
    cache[key].timestamp = Date.now(); // { movies-seattle: { timestamp: 'today' } }
    cache[key].data = axios.get(url)
      .then(data => parseMovieData(data.data))
  }
  return cache[key].data;
}

function parseMovieData(data) {
  try {
    const movies = data.results.map(movie => {
      return new Movie(movie);
    })
    return Promise.resolve(movies); // DISCUSS: return back to this later to discuss
  } catch (err) {
    return Promise.reject(err);
  }
}

class Movie {
  constructor(movie) {
    this.tableName = 'movies',
    this.title = movie.title,
    this.overview = movie.overview,
    this.averagevotes = movie.vote_average,
    this.totalVotes = movie.vote_count,
    this.imageUrl = movie.poster_path,
    this.popularity = movie.popularity,
    this.releasedOn = movie.release_date,
    this.timestamp = Date.now() 
  }
}

module.exports = getMovies;