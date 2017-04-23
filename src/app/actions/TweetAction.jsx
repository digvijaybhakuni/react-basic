import dispatcher from "../dispatcher/Dispatcher.jsx";

export function makeTweet(tweetText){
    let tweet = {
        "twid" : Date.now,
        "active" : false,
        "author" : "Dum Ass",
        "avatar" : "http://pbs.twimg.com/profile_images/468652446445608960/8T7AsMXJ_normal.jpeg",
        "body" : tweetText,
        "date" : "2017-04-18T08:27:51.000Z",
        "screenname" : "dumasass",
        "__v" : 0
    }

    dispatcher.dispatch({type: "TWEET", tweet});
}


export function reTweet(tw){
    
    let tweet = Object.assign({}, tw);
    if(!tweet.reTweet){
        tweet.reTweet = 1;
    }else{
        tweet.reTweet = tweet.reTweet + 1;
    }
    console.log("tweet", tweet);
    dispatcher.dispatch({type: "RETWEET", tweet});
}

export function likeTweet(tw){
    let tweet = Object.assign({}, tw);
    
    if(!tweet.liked){
        tweet.liked = true;
    }else{
        tweet.liked = false;
    }
    console.log("tweet", tweet);
    dispatcher.dispatch({type: "LIKE_TWEET", tweet});
}

export function deleteTweet(twid){
    dispatcher.dispatch({type: "DELETE_TWEET", twid});
}

export function loadTweet(){
    dispatcher.dispatch({type: "LOAD_TWEETS"});
    //test();
}

function test(){
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("GET", "https://api.twitter.com/1.1/statuses/user_timeline.json?count=9");
    xhr.setRequestHeader("authorization", "OAuth oauth_consumer_key=\"0vgmZK8MvZIWt5bVHY06lRPk0\",oauth_token=\"119315513-888wgpWpHeG1whbLZOZaWO74q7tr4DaMdUNWbUpS\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1492924691\",oauth_nonce=\"aslOzE\",oauth_version=\"1.0\",oauth_signature=\"cuW7v54MKBlik1Hh%2FBxgY%2Fjuwtw%3D\"");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "6664955c-1ca7-4e59-38dc-0a00104cafca");

    xhr.send(data);
}