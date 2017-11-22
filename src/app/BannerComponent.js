import React from 'react';

require('./styles/css/Banner.css');

export default class BannerComponent extends React.Component {
  render() {
    return (
      <div className="banner-component">
      	<div className="banner-img" />
      	<div className="banner-text">
      		Morhm’s Blog Home Page
      	</div>
      </div>
    );
  }
}