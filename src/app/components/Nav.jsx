import React from "react";
import {Link} from "react-router"

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class Nav extends React.Component{

	render(){

		// return (
		// 	<AppBar iconElementRight={<FlatButton label="MyTweet" />} />
		// )

		return (
			<nav class="navbar navbar-inverse">
				<div class="container">
		          <ul class="nav navbar-nav">
		            <li><Link to="/">My Tweets</Link></li>
		          	<li><Link to="/favtweets">Favourite Tweets</Link></li>
		          	<li><Link to="/retweets">Re-Tweets</Link></li>
		          </ul>
	          	</div>
	        </nav>
        )
	}

}