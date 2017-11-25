require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Main from './app/main';

import './index.scss';

$(document).ready(function() {
	$('.grid').masonry({
		//options
		itemSelector: '.grid-item'
	})
});

ReactDOM.render(
  <Router>
    <Route path="/" component={Main} />
  </Router>,
  document.getElementById('root')
);

// <Router history={browserHistory}>
//     <Route path="/" component={Main}/>
//   </Router>