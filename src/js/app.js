import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap';
import '../styles/main.scss';
import '../styles/main.less';
// import TemplateApp from './template.js';

export default class App extends Component {
  render() {
    return (
      olá
    );
  }
}

render(<App />, document.getElementById('app'));
