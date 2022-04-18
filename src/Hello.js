import React, { Component } from 'react';
import './Hello.css';
import 'tachyons';
class Hello extends Component {
  state = {};
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello React-js !</h1>
        <img src="https://picsum.photos/200" alt="my pic "></img>
        <p>
          Consequat consequat nisi enim amet ipsum do laborum et eu laborum duis
          labore fugiat.
        </p>
        <h2>{this.props.grseeting}</h2>
      </div>
    );
  }
}

export default Hello;
