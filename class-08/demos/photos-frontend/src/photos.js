import React from 'react';

class Photos extends React.Component {
  render() {
    return (
      this.props.photos.map((photo, idx) => {
        return <div key={idx}>
          <a href={photo.original_image}>
            <img src={photo.img_url} alt={this.props.searchQuery} />
          </a>
          <span>Created by {photo.creator}</span>
        </div>
      })
    )
  }
}

export default Photos;