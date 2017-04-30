
const express = require('express');
const path = require('path');
const http = require('http');
const axios = require('axios');
const bodyParser = require('body-parser');
const tweetsDump = require('./src/app/store/TweetDump.jsx');
const OAUTH_TOKEN_ = "";

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
            console.log(err);
            res.status(500).json(err);
        });
});


router.get("/tweetdumps", (req, res) => {
    res.json(tweetsDump);
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
