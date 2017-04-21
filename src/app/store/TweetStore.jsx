import { EventEmitter } from "events";
import tweets from "./TweetDump.jsx";

class TweetStore extends EventEmitter {

	constructor() {
	    super()
	    console.log("tweets", tweets);
	    this.tweets = tweets;
	}
	
	getAll() {
    	return this.tweets;
	}

	tweetThis(tweet){
		this.tweets.push(tweet);
		this.emit("change");
	}

}

const tweetStore = new TweetStore;
window.tweetStore = tweetStore;
export default tweetStore;
