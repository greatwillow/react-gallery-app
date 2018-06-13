import React, { Component } from 'react';
import PropTypes from 'prop-types';
// STYLES
import 'font-awesome/css/font-awesome.css';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.props.handleSubmitSearchTerm}>
          <input
            type="search"
            placeholder="Search..."
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  handleSubmitSearchTerm: PropTypes.func.isRequired
};

export default SearchBar;
