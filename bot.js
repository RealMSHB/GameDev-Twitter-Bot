
//=============================================================================================
//Setting Up Requirements : Twit Package ,Config
	var Twit = require('twit');
	var config = require('./config');

// Initialaize Twit Package
	var T = new Twit(config);
//=============================================================================================



//=============================================================================================
// State Check for Switching Between Keywords
	var checkState = 1;

// Amount of Seconds Between Every Retweet
	var retweetTime = 300; 
//=============================================================================================


//=============================================================================================
// Set Interval For Retweet
	setInterval(GetTweets, 1000*retweetTime)
//=============================================================================================


//=============================================================================================
// Get Tweets By Keywords : gameart, madewithunity, screenshotsaturday, gamedev
	function GetTweets(err, data, response)
	{

		if(checkState == 1)
		{
			checkState = 2;
			T.get('search/tweets', { q: 'madewithunity', count: 1 },
				function (err, data, response){
					console.log("\nmadewithunity");
					//======================================================================
					// ReTweet a tweet with madewithunity keyword
					T.post('statuses/retweet/:id', { id: data.statuses.id_str },Tweeted);
			});
		}
		else if(checkState == 2)
		{
			checkState = 3;
			T.get('search/tweets', { q: 'gameart', count: 1 },
				function (err, data, response){
					console.log("\ngameart");
					//======================================================================
					// ReTweet a tweet with gameart keyword
					T.post('statuses/retweet/:id', { id: data.statuses.id_str },Tweeted); 
			});
		}
		else if(checkState == 3)
		{
			checkState = 4;
			T.get('search/tweets', { q: 'screenshotsaturday', count: 1 },
				function (err, data, response){
					console.log("\nscreenshotsaturday");
					//======================================================================
					// ReTweet a tweet with screenshotsaturday keyword
					T.post('statuses/retweet/:id', { id: data.statuses.id_str },Tweeted);
			});
		}
		else if(checkState == 4)
		{
			checkState = 5;
			T.get('search/tweets', { q: 'gamedev', count: 1 },
				function (err, data, response){
					console.log("\ngamedev");
					//======================================================================
					// ReTweet a tweet with gamedev keyword
					T.post('statuses/retweet/:id', { id: data.statuses.id_str },Tweeted);
			});
		}
		else if(checkState == 5)
		{
			checkState = 1;
			T.get('search/tweets', { q: 'pixelart', count: 1 },
				function (err, data, response){
					console.log("\npixelart");
					//======================================================================
					// ReTweet a tweet with pixelart keyword
					T.post('statuses/retweet/:id', { id: data.statuses.id_str },Tweeted);
			});
		}
		

		//=====================================================================================
		//Printing Data in a File for Checking Tweet Informations
		// var fs = require('fs');
		// var json = JSON.stringify(data,null,2);
		// fs.writeFile("tweet.json",json);
		//=====================================================================================


	}
//=============================================================================================


//=============================================================================================
// Printing Errors and States
	function Tweeted(err, data, response) {
		if(err)
		{
			console.log(err);
			var retweetTime = 300;
		}
		else 
		{
			console.log("********************Tweeted********************\n");
			var retweetTime = 300;	
		}
	}
//=============================================================================================


// function randIndex (arr) {
//   var index = Math.floor(arr.length*Math.random());
//   return arr[index];
// };