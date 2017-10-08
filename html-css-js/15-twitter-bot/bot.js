var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

var params = { q: 'rainbow', count: 2 }


// set up user stream
var stream = T.stream('user')

// any time someone follows me
stream.on('follow', followed)

function followed(eventMsg) {
  var name = eventMsg.source.name
  var screenName = eventMsg.source.screen_name
  tweetIt('.@ ' + screenName + ' hi ur cool')
}


tweetIt(generateTweet())
setInterval(tweetIt, 1000 * 20, generateTweet())

function generateTweet() {
  var r = Math.floor(Math.random() * 100)
  return 'testing node twit~ \n' + r + ' was a randomly generated number!'
}

function tweetIt(text) {
  var newTweet = {
    status: text
  }

  T.post('statuses/update', newTweet, tweeted)

  function tweeted(err, data, response) {
    if (err) {
      console.log(response)
    } else {
      console.log('tweeted: ' + newTweet.status)
    }
  }
}



// testing logging
// console.log(generateTweet())
// setInterval(
//   () => {
//     console.log(generateTweet())
//   },
//   1000 * 5,
//   generateTweet()
// )
