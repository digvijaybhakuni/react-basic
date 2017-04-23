import React from "react";
import * as TweetAction from "../actions/TweetAction.jsx";

export default class Tweet extends React.Component{
	constructor(props){
		super();
	}

	reTweet(){
		TweetAction.reTweet(this.props.tweet);
	}

	likeTweet(){
		TweetAction.likeTweet(this.props.tweet);
	}

	render() {
		const { body,  date, twid, avatar, author, screenname, liked, reTweet} = this.props.tweet;
		const likeText = (liked) ? "Unlike" :  "Like" ;
		return(
			<div class="col-md-4 tweet">
				<div class="panel panel-primary">
					<div class="panel-heading">
					  	<img src={avatar} class="avatar"/>&nbsp;
					  	<a href={"http://www.twitter.com/" + screenname}>{author}</a>&nbsp;<span class="screen-name">@{screenname}</span>
					</div>
					<div class="panel-body">
						{body}
					</div>
					<div class="panel-body">
						<ul class="nav nav-pills" role="tablist">
							<li role="presentation"><button onClick={this.likeTweet.bind(this)} class="btn btn-primary">{likeText}</button></li>
							<li role="presentation"><button onClick={this.reTweet.bind(this)} class="btn btn-primary">ReTweet <span class="badge">{reTweet}</span></button></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}

}
