import React from 'react';
// COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

import './Header.css';

const Header = props => {
  return (
    <div className="header-container">
      <HeaderTitle {...props} />
      <SearchBar {...props} />
    </div>
  );
};

export default Header;
