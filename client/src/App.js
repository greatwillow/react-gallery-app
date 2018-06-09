import React, { Component } from 'react';
import './App.css';
import { getPhotos } from './services/photoServices';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      searchTerm: ''
    };
  }

  componentDidMount = () => {
    getPhotos(this, '');
  };

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
    console.log('EVENT ', event);
    console.log('NEW searchterm ', this.state.searchTerm);
  };

  render() {
    const photos = this.state.photos.map(photo => {
      return (
        <li key={photo.url}>
          <img src={photo.src.small} alt="ok" />
        </li>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallerina</h1>
          <h2>{this.state.response}</h2>
          <form className="searchbar" onSubmit={this.handleSubmitSearchTerm}>
            <div className="searchbar-input">
              <input
                type="search"
                placeholder="Search for photos!"
                value={this.state.searchTerm}
                onChange={this.handleSearchTermChange}
              />
              <a href="#" className="searchbar-clear" />
            </div>
            <input type="submit" value="SUBMIT" />
          </form>
        </header>
        <div>
          <ul>{photos}</ul>
        </div>
      </div>
    );
  }
}

export default App;
