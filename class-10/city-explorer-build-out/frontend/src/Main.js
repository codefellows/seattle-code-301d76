import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch.js';
import Movies from './Movies.js';

// use this as a helper for caching on the frontend
const storage = {}; // frontend cache - in memory storage object

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searchQuery: '',
      location: ''
    }
  }

  getMovies = async () => {
    try {
      const movies = await axios.get(`${process.env.REACT_APP_BACKEND}/movies`, { params: { city: this.state.searchQuery }});
      console.log('movie data', movies);
      this.setState({ movies: movies.data })
    } catch(err) {
      console.error(err);
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  submitLocation = async () => {
    this.setState({ location: this.state.searchQuery })
    this.getMovies();
  }

  // componentDidUpdate() {
  //   console.log('__STATE__', this.state);
  // }

  render() {
    return (
      <main className="app">
        <CitySearch submitLocation={this.submitLocation} updateCity={this.updateCity} />
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default Main;