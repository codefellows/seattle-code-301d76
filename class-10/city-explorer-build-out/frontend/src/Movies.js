import React from 'react';

class Movies extends React.Component {
  render() {
    <div className="movie-list">
      {this.props.movies.length && this.props.movies.map((movie, idx) => {
        return <Movie key={idx} movie={movie} />
      })}
    </div>
  }
}

export default Movies;