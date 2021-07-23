import React from 'react';

class CitySearch extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitLocation();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a city name..." onChange={this.props.updateCity} />
        <input type="submit" />
      </form>
    )
  }
}

export default CitySearch;