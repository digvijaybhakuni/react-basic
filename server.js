
const express = require('express');
const path = require('path');
const http = require('http');
const axios = require('axios');
const bodyParser = require('body-parser');
const tweets = require('./src/app/store/TweetDump.jsx');
const { url } = require('inspector');
const access_token = "";
const access_token_secret = "";
const api_key = "";
const api_secert_key = "";
const app = express();
const router = express.Router();

const uuid = require('uuid');
const oauthSignature = require('oauth-signature')

const httpMethod = 'GET';
const twitter_url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
const oauth_timestamp = Math.floor(Date.now() / 1000);
const sign_method = "HMAC-SHA1";
const oauth_nonce = uuid.v1();
const oauth_ver="1.0";

const parameters = {
    oauth_consumer_key : api_key,
    oauth_token : access_token,
    oauth_nonce : oauth_nonce,
    oauth_timestamp : oauth_timestamp,
    oauth_signature_method : sign_method,
    oauth_version : '1.0',
}

const encodedSignature = oauthSignature.generate(httpMethod, twitter_url, parameters, api_secert_key, access_token_secret);

const signature = oauthSignature.generate(httpMethod, twitter_url, parameters, api_secert_key, access_token_secret,
    { encodeSignature: false});
	
const oauth_sign =  encodedSignature;

const authorizationHeaders = `OAuth oauth_consumer_key="${api_key}",oauth_token="${access_token}",oauth_signature_method="${sign_method}",oauth_timestamp="${oauth_timestamp}",oauth_nonce="${oauth_nonce}",oauth_version="${oauth_ver}",oauth_signature="${oauth_sign}"`;

const axiosClient = axios.create({
    baseURL: "https://api.twitter.com/1.1/",
    //timeout: 10000,
    headers: {
        "authorization": authorizationHeaders
    }
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

router.get("/mytweets", (req, res) => {
    axiosClient.get('statuses/user_timeline.json')
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
