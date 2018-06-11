import React, { Component } from 'react';
import ImageCardGrid from '../ImageCardGrid/ImageCardGrid';
import './ImageGallery.css';

class ImageGallery extends Component {
  render() {
    if (this.props.photos && this.props.photos.length > 0) {
      return <ImageCardGrid photos={this.props.photos} />;
    } else {
      return (
        <div className="empty-content-pane">
          <h2>Benvenito to Bella Galleria</h2>
          <h3>Enjoy searching through a selection of beautiful photos!</h3>
        </div>
      );
    }
  }
}

export default ImageGallery;
