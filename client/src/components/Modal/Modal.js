import React, { Component } from 'react';
import PropTypes from 'prop-types';
// STYLES
import './Modal.css';
import 'font-awesome/css/font-awesome.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.modalRef && !this.modalRef.contains(event.target)) {
      this.props.handleShowModal();
    }
  };

  render() {
    console.log('MODAL PHOTO ', this.props.photo);
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
          <img src={this.props.photo.src.large} alt={this.props.photo.url} />

          <h3>Photo taken by: </h3>
          <p>{this.props.photo.photographer}</p>
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
