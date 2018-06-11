import React, { Component } from 'react';

import './ImageCard.css';

class ImageCard extends Component {
  render() {
    return (
      <div className="image-card">
        <img src={this.props.photo} />
      </div>
    );
  }
}

export default ImageCard;
