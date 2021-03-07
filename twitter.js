var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?count=9',
  headers: { 
    'Authorization': '' //TODO: Get its
 }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});