import React from 'react';

require('./styles/css/Signup.css');

export default class SignupComponent extends React.Component {
  render() {
    return (
      <div className="signup-component">
        <p>SIGNUP TO NEWSLETTER</p>
        <input className='signup-item' type="text" placeholder="YOUR NAME" />
        <input className='signup-item' type="text" placeholder="YOUR EMAIL ADDRESS" />
        <button className='signup-item' type="button">Subscribe Now</button>
      </div>
    );
  }
}