import React, { Component } from 'react';
// COMPONENTS
import ImageCardGrid from '../ImageCardGrid/ImageCardGrid';
// STYLES
import './ImageGallery.css';

class ImageGallery extends Component {
  render() {
    console.log('GALLERY WINDOW ', this.props.windowWidth, ' and props ', this.props);
    if (this.props.photos && this.props.photos.length > 0) {
      return <ImageCardGrid {...this.props} />;
    } else {
      return (
        <div className="empty-content-pane">
          <h2>Welcome to Bella Galleria</h2>
          <h3>Enjoy searching through a selection of beautiful photos!</h3>
        </div>
      );
    }
  }
}

export default ImageGallery;
