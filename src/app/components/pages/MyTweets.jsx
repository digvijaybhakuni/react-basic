import React from "react";

import Tweet from "../Tweet.jsx"

import TweetStore from "../../store/TweetStore.jsx";

export default class MyTweets extends React.Component {
	constructor() {
	    super();
	    //const tws = TweetStore.getAll();
	    //console.log("tws", tws);
	    this.state = {
	      tweets: TweetStore.getAll(),
	    };
	}

	componentWillMount() {
    	TweetStore.on("change", ()=>{
    		const tws = TweetStore.getAll();
		    console.log("tws", tws.length);
		    getTweets();
    	});
	}

	getTweets() {
    	this.setState({
		      tweets: TweetStore.getAll(),
		});
	}

	render() {

		const { tweets } = this.state;
		const TweetList = tweets.map((t) => {
        	return <Tweet key={t.twid} tweet={t}/>;
		});
		return (<div class="row">
			{TweetList}
		</div>)
	}
}
