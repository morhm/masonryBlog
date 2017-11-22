import React from 'react';

// components
import Banner from './BannerComponent.js';
import Signup from './SignupComponent.js';
import BlogPosts from './BlogPostsComponent.js';

require('./styles/css/BlogBody.css');

export default class BlogBodyComponent extends React.Component {
  render() {
    return (
      <div className="blogbody-component">
        <Banner />
        <Signup />
        <BlogPosts />
      </div>
    );
  }
}