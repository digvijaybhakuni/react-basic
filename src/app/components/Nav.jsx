import React from "react";
import {Link} from "react-router"

export default class Nav extends React.Component{

	render(){
		return (
			<nav class="navbar navbar-inverse">
				<div class="container">
		          <ul class="nav navbar-nav">
		            <li><Link to="/mytweets/10">My Tweets</Link></li>
		          <li><Link to="/favtweets">Favourite Tweets</Link></li>
		          <li><Link to="/retweets">Re-Tweets</Link></li>
		          </ul>
	          	</div>
	        </nav>
        )
	}

}