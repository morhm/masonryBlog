'use strict';

import React from 'react';

require('./styles/css/BlogPost.css');

export default function BlogPostComponent(props) {
  let postImg;

  if (props.data.type === 'Image') {
    postImg = <img className='card-img-top' src={props.data.img} alt="Card image cap" />
  }

  return (
    <div className='grid-item'>
      {postImg}
      <div className="card-block post-text-content text-center">
        <div className='post-icon'>
          <img width='20' height='20' src={props.thumbnail} />
        </div>
        <p className="card-topic">{props.data.topic} </p>
        <p className="card-title"> {props.data.title} </p>
        <p className="card-text post-date"> {props.data.date} </p>
        <p className='card-text post-content-sample'> {props.data.content}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer post-interactions">
        <p> {props.data.comments.length + ' Comment(s)'} </p>
        <img width='32' height='32' src='app/images/dribble-black-logo.png' alt='b' />
        <img width='26' height='26' src='app/images/black-fb.png' alt='fb' />
        <img src='app/images/twitter-black-16.png' alt='tw' />
        <img src='app/images/pinterest.png' alt='p' />
      </div>
    </div>
  );
}