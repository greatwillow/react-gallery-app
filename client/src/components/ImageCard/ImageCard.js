import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    window.addEventListener('resize', this.getImageDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.getImageDimensions);
  };

  componentDidMount = () => {
    this.getImageDimensions();
  };

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }

  handleImageErrored() {
    this.setState({ imageError: true });
  }

  handleSetUpModal = photo => {
    this.props.handleShowModal();
    this.props.handleProvidePhoto(photo);
  };

  setImageHeight = imageActualHeight => {
    this.setState({
      imageHeight: imageActualHeight
    });
  };

  getImageDimensions = () => {
    const imageExpandedWidth = this.props.photo.width;
    const imageExpandedHeight = this.props.photo.height;

    const imageActualWidth = this.imageContainerRef.offsetWidth;
    const imageActualHeight =
      (imageExpandedHeight / imageExpandedWidth) * imageActualWidth;

    this.setImageHeight(imageActualHeight);
  };

  render() {
    return (
      <div
        ref={elem => {
          this.imageContainerRef = elem;
        }}
        className="image-card"
        onClick={() => this.handleSetUpModal(this.props.photo)}
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
          src={this.props.photo.src.medium}
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
