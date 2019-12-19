console.log("The bot2 is running");

var Twit = require('twit');


var config = require('./config');


var T = new Twit(config); 
// console.log("Twit created!");

tweetIt(`hello world`);
setInterval(tweetIt('hello world'), 10000);
function tweetIt(txt) {
	var rainbow = Math.random()*100;
	var tweet = {
		status: `${txt}.${rainbow}`
	};

	T.post('statuses/update', tweet, function(err, data, response) {
		if (err) {
			console.log('Something went wrong');
			console.log(err);
		}
  // console.log(data)
	})
}


// var stream = T.stream('user');
// console.log('user stream created')
// stream.on('follow', followed);

function followed(eventMsg) {
	console.log('follow event!');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('@' + screenName + 'do you like unicorn?');
}

var params = {
	q: 'rainbow',
	count: 2,
}


// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
// 	var tweets = data.statuses;
// 	for (var i = tweets.length - 1; i >= 0; i--) {
// 		console.log(tweets[i].text);
// 	}
// }

