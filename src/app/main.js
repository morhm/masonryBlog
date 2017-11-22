require('./styles/css/App.css');

import React, {Component} from 'react';

import BlogNav from './BlogNavComponent.js';
import BlogBody from './BlogBodyComponent.js';

export default class Main extends Component {
  render() {
    return (
      <div className="b-home">
        <div className="b-top-grad" />
        <BlogNav />
        <BlogBody />
      </div>
    );
  }
}
