import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      <div className="movie-details">
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.imageUrl} />
        <p>{this.props.movie.overview}</p>
        <p>Released on: {this.props.movie.releasedOn}</p>
      </div>
    )
  }
}

export default Movie;