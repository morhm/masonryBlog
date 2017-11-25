import React from 'react';
import {Route} from 'react-router-dom';

// components
import Banner from './BannerComponent.js';
import Signup from './SignupComponent.js';
import BlogPosts from './BlogPostsComponent.js';

require('./styles/css/BlogBody.css');

const postData = {
  thumbnails: {
    Skating: 'app/images/skateboard.png',
    Music: 'app/images/music-symbol.png',
    Movies: 'app/images/video-icon.png'
  },
	posts: [
		{
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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

export default class BlogBodyComponent extends React.Component {
  render() {
    return (
      <div className="blogbody-component">
        <Banner />
        <Signup />
        <BlogPosts data={postData}/>
      </div>
    );
  }
}