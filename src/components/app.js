import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
       Now were routing!!!
       {this.props.children}
      </div>
    );
  }
}
