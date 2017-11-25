'use strict';

import React from 'react';
import {Link, Redirect} from 'react-router-dom';

require('./styles/css/BlogPost.css');

export default class BlogPostComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let postImg;
    if (this.props.data.type === 'Image') {
      postImg = <img className='card-img-top' src={this.props.data.img} alt="Card image cap" />
    }
    return (
      <div>
        <Link to={'/' + this.props.data.id}>
          <div className='grid-item'>
            {postImg}
            <div className="card-block post-text-content text-center">
              <div className='post-icon'>
                <img width='20' height='20' src={this.props.thumbnail} />
              </div>
              <p className="card-topic">{this.props.data.topic} </p>
              <p className="card-title"> {this.props.data.title} </p>
              <p className="card-text post-date"> {this.props.data.date} </p>
              <p className='card-text post-content-sample'> {this.props.data.content}</p>   
              <button type='button' href="#" className="btn btn-outline-primary">Go somewhere</button>
            </div>
            <div className="card-footer post-interactions">
              <p> {this.props.data.comments.length + ' Comment(s)'} </p>
              <img width='32' height='32' src='app/images/dribble-black-logo.png' alt='b' />
              <img width='26' height='26' src='app/images/black-fb.png' alt='fb' />
              <img src='app/images/twitter-black-16.png' alt='tw' />
              <img src='app/images/pinterest.png' alt='p' />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
