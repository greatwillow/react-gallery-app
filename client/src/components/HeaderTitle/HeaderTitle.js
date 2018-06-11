import React, { Component } from 'react';
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

export default HeaderTitle;
