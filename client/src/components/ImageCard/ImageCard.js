import React, { Component } from 'react';
import PropTypes from 'prop-types';
// STYLES
import './ImageCard.css';

class ImageCard extends Component {
  constructor() {
    super();
    this.state = {
      imageHeight: 0,
      modalOpen: false
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

  getImageDimensions = () => {
    const imageExpandedWidth = this.props.photo.width;
    const imageExpandedHeight = this.props.photo.height;

    const imageActualWidth = this.imageContainerRef.offsetWidth;
    const imageActualHeight =
      (imageExpandedHeight / imageExpandedWidth) * imageActualWidth;

    this.setState({
      imageHeight: imageActualHeight
    });
  };

  handleSetUpModal = photo => {
    this.props.handleShowModal();
    this.props.handleProvidePhoto(photo);
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
        <img src={this.props.photo.src.medium} />
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
