import React from "react";

export default class Tweet extends React.Component{
	constructor(props){
		super();
	}

	render() {
		const { body,  date, twid, avatar, author, screenname} = this.props.tweet;
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
							<li role="presentation"><a href="" class="btn btn-primary">Like</a></li>
							<li role="presentation"><a href="" class="btn btn-primary">ReTweet <span class="badge">3</span></a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}

}
