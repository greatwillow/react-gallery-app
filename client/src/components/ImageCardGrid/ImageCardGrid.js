import React from 'react';
import PropTypes from 'prop-types';
// FUNCTIONS
import { checkIfItemGoesInColumn } from '../../utils/responsiveGrid/checkIfItemGoesInColumn';
// COMPONENTS
import ImageCard from '../ImageCard/ImageCard';
// STYLES
import './ImageCardGrid.css';

const ImageCardGrid = props => {
  const renderColumn = column => {
    return (
      <div className="image-grid-column">
        {props.photos.map((photo, index) => {
          let adjustedIndex = index + 1;
          let goesInColumn = checkIfItemGoesInColumn(props, adjustedIndex, column);
          if (goesInColumn) {
            return (
              <div key={index}>
                <ImageCard key={photo.url} photo={photo} {...props} />
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="image-grid-row">
      {renderColumn(1)}
      {renderColumn(2)}
      {renderColumn(3)}
    </div>
  );
};

ImageCardGrid.propTypes = {
  photos: PropTypes.array.isRequired
};

export default ImageCardGrid;
