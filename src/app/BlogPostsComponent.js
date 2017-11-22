'use strict';

import React from 'react';

//components
import BlogPost from './BlogPostComponent.js';

require('./styles/css/BlogPosts.css');

const data = {
  thumbnails: {
    Skating: 'app/images/skateboard.png',
    Music: 'app/images/music-symbol.png',
    Movies: 'app/images/video-icon.png'
  },
	posts: [
		{
      title: 'Richie Jackson Skate Video',
      type: 'Text',
      img: '',
      topic: 'Skating',
      date: 'August 6, 2017',
      content: 'All the text all the text all the text all the textall the text all the text all the text all the text',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'Flog Gnaw in October!',
      type: 'Image',
      img: 'app/images/flog-gnaw-carnival.jpg',
      topic: 'Music',
      date: 'March 2, 2017',
      content: 'Les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'World of Tomorrow - Don Hertzfeldt',
      type: 'Video',
      img: '',
      topic: 'Movies',
      date: 'August 6, 2017',
      content: 'My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big!',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'Flog Gnaw in October!',
      type: 'Image',
      img: 'app/images/seagull-header.jpg',
      topic: 'Music',
      date: 'March 2, 2017',
      content: 'Les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'Richie Jackson Skate Video',
      type: 'Text',
      img: '',
      topic: 'Skating',
      date: 'August 6, 2017',
      content: 'All the text all the text all the text all the textall the text all the text all the text all the text',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'World of Tomorrow - Don Hertzfeldt',
      type: 'Video',
      img: '',
      topic: 'Movies',
      date: 'August 6, 2017',
      content: 'My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big!',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'Flog Gnaw in October!',
      type: 'Image',
      img: 'app/images/world-of-tomorrow.jpg',
      topic: 'Music',
      date: 'March 2, 2017',
      content: 'Les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'Richie Jackson Skate Video',
      type: 'Text',
      img: '',
      topic: 'Skating',
      date: 'August 6, 2017',
      content: 'All the text all the text all the text all the textall the text all the text all the text all the text',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'Flog Gnaw in October!',
      type: 'Image',
      img: 'app/images/seagull-header.jpg',
      topic: 'Music',
      date: 'March 2, 2017',
      content: 'Les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle les go monicle',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    },
    {
      title: 'World of Tomorrow - Don Hertzfeldt',
      type: 'Video',
      img: '',
      topic: 'Movies',
      date: 'August 6, 2017',
      content: 'My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big! My spoon is too big!',
      comments: [
        {
          user: 'Mark Orozco',
          content: 'Radishes and poptarts'
        },
        {
          user: 'Mike Osorio',
          content: 'Hats4Therapy R us'
        }
      ]
    }
  ]
}

export default class BlogPostsComponent extends React.Component {


  render() {
    return (
      <div className="grid blogposts-component">
        {data.posts.map( (element, i) => {
          let imgsrc = data.thumbnails[element.topic];
          return <BlogPost data={element} thumbnail={imgsrc} key= {i} />
        })}
      </div>
    )
  }
}