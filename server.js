
const express = require('express');
const path = require('path');
const http = require('http');
const axios = require('axios');
const bodyParser = require('body-parser');
const tweets = require('./src/app/store/TweetDump.jsx');
const OAUTH_TOKEN_ = "OAuth oauth_consumer_key=\"0vgmZK8MvZIWt5bVHY06lRPk0\",oauth_token=\"119315513-888wgpWpHeG1whbLZOZaWO74q7tr4DaMdUNWbUpS\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1492924691\",oauth_nonce=\"aslOzE\",oauth_version=\"1.0\",oauth_signature=\"cuW7v54MKBlik1Hh%2FBxgY%2Fjuwtw%3D\"";

const app = express();
const router = express.Router();



const axiosClient = axios.create({
    baseURL: "https://api.twitter.com/1.1/",
    //timeout: 10000,
    headers: {
        "authorization": OAUTH_TOKEN_
    }
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

router.get("/mytweets", (req, res) => {
    axiosClient.get('statuses/user_timeline.json?count=9')
		.then((e) => {
            console.log("e", e);
            res.json(e.data);
        })
		.catch((err) => {
            console.error('error', err.response);
            res.status(err.response.status).json({msg: err.response.statusText});
        });
});


router.get("/tweetdumps", (req, res) => {
  console.log("tweets", tweets);
    res.json(tweets);
});

app.use('/api', router);

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`APP running on localhost:${port}`));
