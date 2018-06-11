import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <HeaderTitle {...this.props} />
        <SearchBar {...this.props} />
      </div>
    );
  }
}

export default Header;
