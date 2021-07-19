import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    // our UI always needs to stay in sync with our data
    // so, when we make a req to the location API, as soon as we get information back
    // stuff that in the state

    // as we are typing, keep the state of our searchQuery in sync with our UI
    this.state= {
      searchQuery: '',
      location: {}
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
    // this is new - this is how we make a "GET" request using a request tool like axios
    const response = await axios.get(API);
    console.log('LOCATION IQ DATA:', response);

    // once we have data from our api, stuff it in a state property so we
    // can use it
    this.setState({ location: response.data[0] })
  }

  render() {
    return (
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })}
        placeholder="type city name here..." type="text" />
        <button onClick={this.getLocation}>click for search results</button>

        {/* as soon as state gets updated with location data, the following will display */}
        <p>Location: {this.state.location.display_name}</p>
        <p>Location Id: {this.state.location.place_id}</p>
      </>
    )
  }
}

export default App;
