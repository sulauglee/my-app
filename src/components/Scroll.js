import React, { Component } from 'react';
class Scroll extends Component {
  state = {};
  render() {
    return (
      <div style={{ overflow: 'scroll', border: '3px solid white ',height:'500px' }}>
      
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
