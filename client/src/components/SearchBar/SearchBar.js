import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import 'font-awesome/css/font-awesome.css';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar">
      <form onSubmit={props.handleSubmitSearchTerm}>
        <input
          type="search"
          placeholder="Search..."
          value={props.searchTerm}
          onChange={props.handleSearchTermChange}
        />
        <button className="search-button" type="submit" label="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  handleSubmitSearchTerm: PropTypes.func.isRequired
};

export default SearchBar;
