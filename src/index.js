require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Main from './app/main';

import './index.scss';

$(document).ready(function() {
	$('.grid').masonry({
		//options
		itemSelector: '.grid-item'
	})
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);
