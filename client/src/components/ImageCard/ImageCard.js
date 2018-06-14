import React, { Component } from 'react';
import PropTypes from 'prop-types';
// FUNCTIONS
import { getImageDimensions } from '../../utils/responsiveGrid/getImageDimensions';
// STYLES
import './ImageCard.css';

class ImageCard extends Component {
  constructor() {
    super();
    this.state = {
      imageHeight: 0,
      imageLoaded: false,
      imageError: false
    };
  }

  componentWillMount = () => {
    window.addEventListener('resize', getImageDimensions(this));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', getImageDimensions(this));
  };

  componentDidMount = () => {
    getImageDimensions(this);
  };

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }

  handleImageErrored() {
    this.setState({ imageError: true });
  }

  handleSetUpModal = photo => {
    if (this.state.imageLoaded) {
      this.props.handleShowModal();
      this.props.handleProvidePhoto(photo);
    }
  };

  render() {
    let { photo } = this.props;
    return (
      <div
        ref={elem => {
          this.imageContainerRef = elem;
        }}
        className="image-card"
        onClick={() => this.handleSetUpModal(photo)}
        style={{
          width: '100%',
          height: this.state.imageHeight
        }}
      >
        {!this.state.imageLoaded && (
          <div className="image-overlay">
            <div className="ripple-loader">
              <div />
              <div />
            </div>
          </div>
        )}

        {this.state.imageErrored && (
          <div className="image-overlay">
            <p className="image-error-text">
              Unfortunately it looks like there was an error while finding and loading
              this image!
            </p>
          </div>
        )}

        <img
          src={photo.src.medium}
          onLoad={() => this.handleImageLoaded()}
          onError={this.handleImageErrored}
        />
      </div>
    );
  }
}

ImageCard.propTypes = {
  photo: PropTypes.object.isRequired,
  handleShowModal: PropTypes.func.isRequired,
  handleProvidePhoto: PropTypes.func.isRequired
};

export default ImageCard;
