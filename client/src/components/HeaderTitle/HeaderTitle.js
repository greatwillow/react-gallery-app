import React from 'react';
import PropTypes from 'prop-types';
// STYLES
import './HeaderTitle.css';

const HeaderTitle = ({ windowWidth }) => {
  if (windowWidth < 620) {
    return (
      <div className="header-title">
        B &nbsp;&nbsp;
        <span>G</span>
      </div>
    );
  } else {
    return (
      <div className="header-title">
        Bella &nbsp;&nbsp;
        <span>Galleria</span>
      </div>
    );
  }
};

HeaderTitle.propTypes = {
  windowWidth: PropTypes.number.isRequired
};

export default HeaderTitle;
