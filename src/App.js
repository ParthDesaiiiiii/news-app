import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  a = 'Parth Desai';
  render() {
    return (
      <div>
        Now I am creating a new project in React using class based component by {this.a}
      </div>
    )
  }
}

