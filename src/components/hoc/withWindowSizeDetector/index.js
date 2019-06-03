import React, { Component } from 'react';

const withWindowSizeDetector = WrappedComponent => class windowSizeDetector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      isMobile: false,
      isPad: false,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions () {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const isPad = windowWidth <= 1024;
    const isMobile = windowWidth <= 767;
    this.setState({
      windowWidth,
      windowHeight,
      isPad,
      isMobile,
    });
  }

  render() {
    return (
      <WrappedComponent
        {...this.props}
        {...this.state}
      />
    );
  }
};

export default withWindowSizeDetector;
