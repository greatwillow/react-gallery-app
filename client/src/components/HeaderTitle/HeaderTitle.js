import React, { Component } from 'react';
import PropTypes from 'prop-types';
// STYLES
import './HeaderTitle.css';

class HeaderTitle extends Component {
  render() {
    if (this.props.windowWidth < 620) {
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
  }
}

HeaderTitle.propTypes = {
  windowWidth: PropTypes.number.isRequired
};

export default HeaderTitle;
