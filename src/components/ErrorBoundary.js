import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      haserror: false,
    };
  }
  state = {};

  componentDidCatch(error, info) {
    this.setState({ haserror: true });
  }
  render() {
    if (this.state.haserror) {
      return <h2 className="text-danger">oooops that is not good !</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
