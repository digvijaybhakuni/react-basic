//@flow

const tweet = {
        "twid" : Date.now,
        "active" : false,
        "author" : "Dum Ass",
        "avatar" : "http://pbs.twimg.com/profile_images/468652446445608960/8T7AsMXJ_normal.jpeg",
        "body" : "DDD",
        "date" : "2017-04-18T08:27:51.000Z",
        "screenname" : "dumasass",
}

const tweetReducer= (state:Array<any>=[], action:any) => {
    switch (action.type) {
        case "TWEET":
            //Object.assign({body:action.payload}, tweet);
            return state.concat(Object.assign(tweet, {body:action.payload, twid : Date.now}));
        case "LIKE_TWEET":
            //Object.assign({liked: !action.payload.liked}, action.payload)
            return state.concat(Object.assign(action.payload, {liked: !action.payload.liked}));
        case "LOAD_PAYLOAD_TWEET":
            //Object.assign({liked: !action.payload.liked}, action.payload)
            return state.concat(action.payload);
        default:
            console.log("action", action);
            return state;
    }
}

export default tweetReducer;
