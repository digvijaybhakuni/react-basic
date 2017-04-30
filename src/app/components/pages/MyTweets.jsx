import React from "react";

import Tweet from "../Tweet.jsx"
import * as TweetAction from "../../actions/TweetAction.jsx";
import TweetStore from "../../store/TweetStore.jsx";
import TweetReduxStore from "../../store/TweetReduxStore.jsx";

window.TweetAction = TweetAction;

export default class MyTweets extends React.Component {
	constructor() {
	    super();
	    //const tws = TweetStore.getAll();
	    //console.log("tws", tws);
	    this.state = {
	      tweets: TweetStore.getAll(),
	    };

		this.changeListner = (()=>{
    		const tws = TweetStore.getAll();
		    console.log("tws", tws);
		    this.getTweets();
    	}).bind(this);

		this.subscribeRedux = (()=> { 
			console.log("subscribeRedux change");
			this.setState({tweets: TweetReduxStore.getState().tweets});
		}).bind(this);
	}

	componentWillMount() {
    	//TweetStore.on("change", this.changeListner);
		TweetReduxStore.subscribe(this.subscribeRedux);
	}

	 componentWillUnmount(){
		//TweetStore.removeListener("change", this.changeListner);
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
			<h1>My Tweet</h1>
			{TweetList}
		</div>)
	}
}
