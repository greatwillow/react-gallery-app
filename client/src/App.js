import React, { Component } from 'react';
import { getPhotos } from './services/photoServices';
import { checkDimensionsHOC } from './utils/checkDimensionsHOC';
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      searchTerm: ''
    };
  }

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmitSearchTerm = event => {
    event.preventDefault();
    getPhotos(this, this.state.searchTerm);
    this.setState({
      searchTerm: ''
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
        <ImageGallery photos={this.state.photos} />
      </div>
    );
  }
}

const WrappedApp = checkDimensionsHOC(App);

export default WrappedApp;
