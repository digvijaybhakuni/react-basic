import React from "react";
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  Link, IndexRoute ,hashHistory
} from 'react-router';

import Layout from "./components/Layout.jsx";

import FavTweets from "./components/pages/FavTweets.jsx";
import MyTweets from "./components/pages/MyTweets.jsx";
import ReTweets from "./components/pages/ReTweets.jsx";

const app = document.getElementById('app');

//console.log(hashHistory);

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={MyTweets}></IndexRoute>
			<Route path="/mytweets(/:count)" name="mytweets" component={MyTweets}></Route>
      		<Route path="/favtweets(/:count)" name="favtweets" component={FavTweets}></Route>
			<Route path="/retweets(/:count)" name="retweets" component={ReTweets}></Route>
		</Route>
	</Router>
, app);

