import React from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


import * as TweetAction from "../actions/TweetAction.jsx";

export default class Tweet extends React.Component{
	constructor(props){
		super();
	}

	reTweet(ev, val){
		TweetAction.reTweet(this.props.tweet);
	}

	likeTweet(ev, liked){
		TweetAction.likeTweet(this.props.tweet);
	}

	render() {
		const { body,  date, twid, avatar, author, screenname, liked, reTweet} = this.props.tweet;
		const likeText = (liked) ? "Unlike" :  "Like" ;
		const likeIcon = (liked) ? <ActionFavorite /> :  <ActionFavoriteBorder /> ;
		const reTweetCt = (reTweet) ? reTweet : 0; 
		const styles = {
			block: {
				maxWidth: 250,
			},
			checkbox: {
				marginBottom: 16,
			},
		};
		return (
		<Card class="tweet-card">
			<CardHeader title={author} subtitle={screenname} avatar={avatar}/>
			<CardText>{body}</CardText>
			<CardActions >
				<Badge badgeContent={reTweetCt} primary={true} badgeStyle={{top: 24, right: 24}}>
					<IconButton tooltip="ReTweet" onClick={this.reTweet.bind(this)} iconClassName="material-icons" >cached</IconButton>
				</Badge>
				<IconButton tooltip={likeText} onClick={this.likeTweet.bind(this)} > {likeIcon} </IconButton>
			</CardActions>
		</Card>
		)
		
		/*return(
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
		)*/
	}

}
