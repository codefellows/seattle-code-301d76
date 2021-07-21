import React from 'react';
import axios from 'axios';
import Photos from './photos.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photos: []
    }
  }

  getPhotos = async (e) => {
    e.preventDefault();

    // this would be a good area to implement a try/catch
    const API = 'http://localhost:3001';
    const photos = await axios.get(`${API}/photos`, { params: {searchQuery: this.state.searchQuery }});
    this.setState({ photos: photos.data })
  }

  updateSearch = (e) => this.setState({ searchQuery: e.target.value })

  render() {
    return (
      <>
        <form onSubmit={this.getPhotos}>
          <input type="text" onChange={this.updateSearch} />
          <input type="submit" />
        </form>

        {this.state.photos.length &&
          <Photos photos={this.state.photos} searchQuery={this.state.searchQuery} />
        }
      </>
    )
  }
}

export default App;