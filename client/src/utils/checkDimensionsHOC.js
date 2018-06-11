import React, { Component } from 'react';

export const checkDimensionsHOC = WrappedComponent => {
  return class DimensionComponent extends Component {
    constructor() {
      super();
      this.state = {
        windowWidth: window.innerWidth
      };
    }

    componentWillMount = () => {
      window.addEventListener('resize', this.handleWindowSizeChange);
    };

    componentWillUnmount = () => {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    };

    handleWindowSizeChange = () => {
      this.setState({
        windowWidth: window.innerWidth
      });
    };
    render() {
      return <WrappedComponent windowWidth={this.state.windowWidth} {...this.props} />;
    }
  };
};
