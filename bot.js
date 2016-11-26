var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);


var checkState = 1;
var retweetTime = 20;

//T.get('search/tweets', { q: '#gamedev', count: 1 }, Tweeted);


setInterval(GetTweets, 1000*retweetTime)

function GetTweets(err, data, response)
{

	if(checkState == 1)
	{
		checkState = 2;
		T.get('search/tweets', { q: 'gameart', count: 1 },
			function (err, data, response){
				console.log("gameart");
				T.post('statuses/retweet/:id', { id: data.statuses[0].id_str },Tweeted)

		});
	}
	else if(checkState == 2)
	{
		checkState = 3;
		T.get('search/tweets', { q: 'madewithunity', count: 1 },
			function (err, data, response){
				console.log("madewithunity");
				T.post('statuses/retweet/:id', { id: data.statuses[0].id_str },Tweeted)
		});
	}
	else if(checkState == 3)
	{
		checkState = 4;
		T.get('search/tweets', { q: 'screenshotsaturday', count: 1 },
			function (err, data, response){
				console.log("screenshotsaturday");
				T.post('statuses/retweet/:id', { id: data.statuses[0].id_str },Tweeted)
		});
	}
	else if(checkState == 4)
	{
		checkState = 5;
		T.get('search/tweets', { q: 'indiegame', count: 1 },
			function (err, data, response){
				console.log("indiegame");
				T.post('statuses/retweet/:id', { id: data.statuses[0].id_str },Tweeted)
		});
	}
	else if(checkState == 5)
	{
		checkState = 1;
		T.get('search/tweets', { q: 'gamedev', count: 1 },
			function (err, data, response){
				console.log("gamedev");
				T.post('statuses/retweet/:id', { id: data.statuses[0].id_str },Tweeted)
		});
	}
	
	// var fs = require('fs');
	// var json = JSON.stringify(data,null,2);
	// fs.writeFile("tweet.json",json);
}


function Tweeted(err, data, response) {
	if(err)
	{
		console.log(err);
		var retweetTime = 20;
	}
	else 
	{
		console.log("Tweeted");
		var retweetTime = 25;	
	}
  
}