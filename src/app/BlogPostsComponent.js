'use strict';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router';

//components
import BlogPost from './BlogPostComponent.js';
import SinglePost from './SinglePost.js';


require('./styles/css/BlogPosts.css');


export default class BlogPostsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {redirect: false};

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    console.log('eylloo');
    this.setState({redirect: true});
  }

  render() {

    return (
      <div>
        <Route path="/:id" render={ (props) => (
          <SinglePost {...props} data={this.props.data} />
        )} />
        <div className="grid blogposts-component">
          {this.props.data.posts.map( (element, i) => {
            let imgsrc = this.props.data.thumbnails[element.topic];
            return <BlogPost data={element} thumbnail={imgsrc} changeState={this.changeState}  key= {i} />
          })}
        </div>

      </div>
    )
  }
}