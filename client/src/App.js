import React, { Component } from 'react';
// FUNCTIONS
import { getPhotos } from './services/photoServices';
import { checkDimensionsHOC } from './utils/checkDimensionsHOC';
// COMPONENTS
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
// STYLES
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      currentPhoto: {
        src: {
          medium: null
        }
      },
      searchTerm: '',
      errorMessage: {
        errorFound: false,
        message: ''
      }
    };
  }

  modifyStateAfterPhotoSearch = response => {
    this.setState(response);
  };

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmitSearchTerm = event => {
    event.preventDefault();
    getPhotos(this.state.searchTerm, this.modifyStateAfterPhotoSearch);
    this.setState({
      searchTerm: ''
    });
  };

  handleShowModal = () => {
    if (
      this.state.erroMessage &&
      this.state.errorMessage.errorFound === true &&
      this.state.modalOpen
    ) {
      this.setState({
        errorMessage: {
          errorFound: false,
          message: ''
        }
      });
    }
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  handleProvidePhoto = photo => {
    this.setState({
      currentPhoto: photo
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          searchTerm={this.state.searchTerm}
          handleSubmitSearchTerm={this.handleSubmitSearchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          {...this.props}
        />
        <ImageGallery
          photos={this.state.photos}
          handleShowModal={this.handleShowModal}
          handleProvidePhoto={this.handleProvidePhoto}
          {...this.props}
        />
        {this.state.modalOpen &&
          this.state.errorMessage && (
            <Modal
              handleShowModal={this.handleShowModal}
              photo={this.state.currentPhoto}
              errorMessage={this.state.errorMessage}
            />
          )}
      </div>
    );
  }
}

const WrappedApp = checkDimensionsHOC(App);

export default WrappedApp;
