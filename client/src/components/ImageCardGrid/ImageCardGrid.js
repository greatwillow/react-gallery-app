import React, { Component } from 'react';
import PropTypes from 'prop-types';
// FUNCTIONS
import checkIfItemGoesInColumn from '../../utils/responsiveGrid/checkIfItemGoesInColumn';
// COMPONENTS
import ImageCard from '../ImageCard/ImageCard';
// STYLES
import './ImageCardGrid.css';

class ImageCardGrid extends Component {
  renderColumn = column => {
    return (
      <div className="image-grid-column">
        {this.props.photos.map((photo, index) => {
          let adjustedIndex = index + 1;
          let goesInColumn = checkIfItemGoesInColumn(this, adjustedIndex, column);
          if (goesInColumn) {
            return (
              <div key={index}>
                <ImageCard key={photo.url} photo={photo} {...this.props} />
              </div>
            );
          }
        })}
      </div>
    );
  };

  render() {
    const photos = this.props.photos;
    return (
      <div className="image-grid-row">
        {this.renderColumn(1)}
        {this.renderColumn(2)}
        {this.renderColumn(3)}
      </div>
    );
  }
}

ImageCardGrid.propTypes = {
  photos: PropTypes.array.isRequired
};

export default ImageCardGrid;
