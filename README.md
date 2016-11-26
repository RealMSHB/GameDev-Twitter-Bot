# GameDev-Twitter-Bot
this bot is local and you should have node.js and twit 

you have to add a Config file for connecting to Twitter :

Config File :

        var T = new Twit({
          consumer_key:         '...',
          consumer_secret:      '...',
          access_token:         '...',
          access_token_secret:  '...',
          timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
        })
