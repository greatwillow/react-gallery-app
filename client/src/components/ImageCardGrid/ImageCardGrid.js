import React, { Component } from 'react';
import ImageCard from '../ImageCard/ImageCard';

import './ImageCardGrid.css';

class ImageCardGrid extends Component {
  getAdjustedIndex = index => {
    let adjustedIndex = index + 1;
    let tempIndex = adjustedIndex;
    if (tempIndex > 3) {
      adjustedIndex = tempIndex % 3;
    }
    return adjustedIndex;
  };

  renderItem = (photo, index) => {
    return <ImageCard key={photo.url} photo={photo.src.small} />;
  };

  render() {
    const photos = this.props.photos;
    return (
      <div className="image-grid-row">
        {/* FIRST COLUMN */}
        <div className="image-grid-column">
          {photos.map((photo, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (
              adjustedIndex % 1 === 0 &&
              adjustedIndex % 2 !== 0 &&
              adjustedIndex % 3 !== 0
            ) {
              return <div key={index}>{this.renderItem(photo, index)}</div>;
            }
          })}
        </div>
        {/* SECOND COLUMN */}
        <div className="image-grid-column">
          {photos.map((photo, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (adjustedIndex % 2 === 0 && adjustedIndex % 3 !== 0) {
              return <div key={index}>{this.renderItem(photo, index)}</div>;
            }
          })}
        </div>
        {/* THIRD COLUMN */}
        <div className="image-grid-column">
          {photos.map((photo, index) => {
            let adjustedIndex = this.getAdjustedIndex(index);
            if (adjustedIndex % 3 === 0) {
              return <div key={index}>{this.renderItem(photo, index)}</div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default ImageCardGrid;
