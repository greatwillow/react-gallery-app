import React, { Component } from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import ModalPhotoInset from '../ModalPhotoInset/ModalPhotoInset';
import ModalMessageInset from '../ModalMessageInset/ModalMessageInset';
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
    let { photo, handleShowModal, errorMessage } = this.props;
    return (
      <div className="screen-overlay">
        <div
          ref={element => {
            this.modalRef = element;
          }}
          className="modal"
        >
          <button className="modal-close-button" onClick={handleShowModal}>
            <i className="fa fa-close" />
          </button>
          {!errorMessage.errorFound && (
            <ModalPhotoInset
              photo={photo}
              photoSpecifiedWidth={this.state.photoSpecifiedWidth}
            />
          )}
          {errorMessage.errorFound && <ModalMessageInset errorMessage={errorMessage} />}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
  errorMessage: PropTypes.object.isRequired
};

export default Modal;
