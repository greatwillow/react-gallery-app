import React, { Component } from 'react';
import PropTypes from 'prop-types';
// STYLES
import './Modal.css';
import 'font-awesome/css/font-awesome.css';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      photoSpecifiedWidth: '80%'
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.getModalPhotoWidth();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.modalRef && !this.modalRef.contains(event.target)) {
      this.props.handleShowModal();
    }
  };

  getModalPhotoWidth = () => {
    if (this.props.photo.height < this.props.photo.width) {
      this.setState({
        photoSpecifiedWidth: '80%'
      });
    } else {
      this.setState({
        photoSpecifiedWidth: '50%'
      });
    }
  };

  render() {
    return (
      <div className="screen-overlay">
        <div
          ref={element => {
            this.modalRef = element;
          }}
          className="modal"
        >
          <button className="modal-close-button" onClick={this.props.handleShowModal}>
            <i className="fa fa-close" />
          </button>
          <img
            src={this.props.photo.src.medium}
            alt={this.props.photo.url}
            width={this.state.photoSpecifiedWidth}
          />
          <p>
            This photograph has been taken from{' '}
            <a href="http://www.pexels.com">www.pexels.com</a>.<br />
            The stated photographer is: &nbsp;{this.props.photo.photographer}
            <br />
            Find out more by clicking <a href={this.props.photo.url}>here.</a>
          </p>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired
};

export default Modal;
