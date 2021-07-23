import React from 'react';
import axios from 'axios';

const storage = {};

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
      this.setState({ movies: movies.data })
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    return (
      <main className="app">
        <Movies movies={this.state.movies} />
      </main>
    )
  }
}

export default Main;