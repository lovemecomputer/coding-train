console.log('the bot is starting')

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

var params = { q: 'rainbow', count: 2 }

T.get('search/tweets', params, function(err, data, response) {
  // console.log(data)
  // for(item in data.statuses) {
  //   console.log(item);
  // }
  data.statuses.forEach(item=>{
    console.log(item.text);
  })
})
