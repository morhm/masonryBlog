import React from 'react';

import {Link, Redirect} from 'react-router-dom';

require('./styles/css/SinglePost.css');

export default class SinglePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {postId: this.props.match.params.id};

    this.renderComments = this.renderComments.bind(this);
  }

  renderComments(post) {
    let comments = post.comments.map( (comment, index) => (
      <div><strong>{comment.user}</strong>  {comment.content}</div>
    ));
    return (
      <div>
      {comments}
      </div>
    )
  }

  render() {
    let currPost = this.props.data.posts.find( post => post.id == this.state.postId );
    let img = currPost.img.length ? <img className="post-img col" src={currPost.img} /> : "";
    return (
      <div className="post-root">
        <div className="post-content container">
          <div className="row">
            <div className="col-sm-12" style={{display: 'flex', justifyContent: "space-between"}}>
              <div className="post-title"> <strong>{currPost.title}</strong> </div>
              <Link to="/"><span style={{color: "black"}}>X</span></Link>
            </div>
            <div className="col-sm-12" style={{display: "flex"}}>
              <div style={{padding: "0 10px"}} className="post-topic">{currPost.topic} </div>
              <div style={{padding: "0 10px"}} className="ost-text"> {currPost.date} </div>
            </div>
            <div style={{padding: '20px'}} className="col-sm-12">
              <div className="row">
                {img}
                <div className="col">
                  <div className="row">
                    <p className='card-text col-sm-12'> {currPost.content}</p>   
                    <div style={{paddingTop: "10px", borderTop: "1px solid gray"}} className="post-comments col-sm-12">
                      {this.renderComments(currPost)}
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
        <div className="card-footer post-interactions">
          <img width='32' height='32' src='app/images/dribble-black-logo.png' alt='b' />
          <img width='26' height='26' src='app/images/black-fb.png' alt='fb' />
          <img src='app/images/twitter-black-16.png' alt='tw' />
          <img src='app/images/pinterest.png' alt='p' />
        </div>
        </div>
      </div>
    );
  }
}

/*
<Link to="/">
                <span style={{color: "black"}}>X</span>
              </Link>
              */