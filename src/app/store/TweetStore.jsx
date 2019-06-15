import { EventEmitter } from "events";

import axios from "axios";

console.log("axios", axios);

import dispatcher from '../dispatcher/Dispatcher.jsx';

class TweetStore extends EventEmitter {

	constructor() {
		super()
		this.tweets = [];
		this.tweetsMapping = this.tweetsMapping.bind(this);
		this.http = axios.create({});
		this.intTweetStore();
		//this.loadTweets();
	}

	getAll() {
		return this.tweets;
	}

	intTweetStore(){
		this.http.get('api/tweetdumps')
	 .then((res) => { this.tweets = res.data; this.emit("change"); })
	 .catch(console.log);

	}

	loadTweets(){
		 this.http.get('api/mytweets')
		.then(this.tweetsMapping)
		.catch(console.log);
	}

	tweetThis(tweet) {
		this.tweets.push(tweet);
		this.emit("change");
	}

	tweetsMapping(res){
		console.log("res", res);
		this.tweets = res.data.map((t) => {
			let tw = {};
			tw.twid = t.id_str;
			tw.active = false;
			tw.author = t.user.name;
			tw.avatar = t.user.profile_image_url;
			tw.body = t.text;
			tw.date = t.created_at;
			tw.screenname = t.user.screen_name;
			tw._v = 0
			tw.liked = t.favorited;
			tw.reTweet = t.retweet_count;
			return tw;
		});
		this.emit("change");
	}

	replaceTweet(tw){
		let index = this.tweets.findIndex(t => t.twid === tw.twid);
		this.tweets[index] = tw;
		this.emit("change");
	}

	eventHandler(ev) {
		console.log("event dispatched", ev);
		switch (ev.type) {
			case "TWEET": {
				const tw = Object.assign({twid: Date.now()}, ev.tweet);
				tw.twid = Date.now();
				console.log("tw", tw);
				this.tweetThis(tw);
				break;
			}
			case "RETWEET": {
				this.replaceTweet(ev.tweet);
				break;
			}
			case "LIKE_TWEET": {
				this.replaceTweet(ev.tweet);
				break;
			}
			case "LOAD_TWEETS" : {
				this.loadTweets();
				break;
			}
		}
	}

}

const tweetStore = new TweetStore;
dispatcher.register(tweetStore.eventHandler.bind(tweetStore));
export default tweetStore;
