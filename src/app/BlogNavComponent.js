import React from 'react';

require('./styles/css/BlogNav.css');

export default class BlogNavComponent extends React.Component {

  render() {
    return (
      <div className="blognav-component">
      	<img width="24" height="18" className='bn-sandwich-button' src='app/images/hamburger-button.png' alt='hamburger-button' />
      	<img className='bn-logo' src='app/images/logo.png' alt='MORHM' />
      	<span className='bn-menu-items'>
      		<span>
	  			<img height='20' width='20' src='app/images/facebook-32.png' alt='img1' />
	  		</span>
	  		<span>
	  			<img height='20' width='20' src='app/images/white-twitter-24.png' alt='img2' />
	  		</span>
	  		<span>
	  			<img height='26' width='26' src='app/images/tumblr-logo-white/tumblr-logo-white-512.png' alt='img3' />
	  		</span>
	  		<span>
	  			<img height='18' width='18' src='app/images/magnifying-glass.png' alt='img4' />
	  		</span>
        </span>
      </div>
    );
  }
}